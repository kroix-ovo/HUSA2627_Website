/** Local search only: queries stay in the browser and are never sent to a service. */
export function normalizeSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
export function matchesQuery(text: string, query: string): boolean {
  const tokens = normalizeSearch(query.slice(0, 200))
    .split(' ')
    .filter(Boolean);
  const haystack = normalizeSearch(text);
  return tokens.every((token) => haystack.includes(token));
}
