// Check generated files, so bad route/data combinations fail before deployment.
import { readdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
async function collect(directory) {
  const items = await readdir(directory, { withFileTypes: true });
  const results = await Promise.all(
    items.map((item) =>
      item.isDirectory()
        ? collect(path.join(directory, item.name))
        : [path.join(directory, item.name)],
    ),
  );
  return results.flat();
}
const files = await collect(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
if (htmlFiles.length < 20)
  throw new Error('Expected a complete static site, not an empty build');
let references = 0;
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  if (!/<h1[\s>]/.test(html)) throw new Error(`Missing page heading: ${file}`);
  if (
    /I'm a paragraph|Click here to add your own text|instagram\.com\/wix|© 2035/.test(
      html,
    )
  )
    throw new Error(`Wix placeholder content escaped into ${file}`);
  const relative = path.relative(root, file).replaceAll(path.sep, '/');
  const route =
    relative === 'index.html'
      ? '/'
      : '/' + relative.replace(/index\.html$/, '');
  for (const match of html.matchAll(/(?:href|src)="([^"<>]+)"/g)) {
    const value = match[1].replaceAll('&amp;', '&');
    if (/^(?:https?:|mailto:|tel:|data:|\/\/)/i.test(value)) continue;
    const url = new URL(value, `https://local.invalid${route}`);
    const pathname = decodeURIComponent(url.pathname);
    const output = path.join(
      root,
      pathname.endsWith('/') ? pathname + 'index.html' : pathname,
    );
    await access(output).catch(() => {
      throw new Error(`Broken local reference ${value} in ${relative}`);
    });
    if (url.hash && output.endsWith('.html')) {
      const target = await readFile(output, 'utf8');
      const id = decodeURIComponent(url.hash.slice(1));
      if (!target.includes(`id="${id}"`))
        throw new Error(`Missing anchor ${id} in ${output}`);
    }
    references++;
  }
}
console.log(
  `${htmlFiles.length} static pages and ${references} internal references verified.`,
);
