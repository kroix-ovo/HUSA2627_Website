import test from 'node:test';
import assert from 'node:assert/strict';
import { matchesQuery, normalizeSearch } from '../src/lib/search.ts';
import { departments } from '../src/content/departments.ts';
import { initiatives } from '../src/content/platform.ts';
import { categories, offices } from '../src/content/resources.ts';

test('search handles case, accents, and punctuation', () => {
  assert.equal(normalizeSearch(' RÉSUMÉ & Career! '), 'resume career');
  assert.equal(
    matchesQuery('Career coaching and résumé reviews', 'RESUME'),
    true,
  );
});
test('all query terms must match, including multiword searches', () => {
  assert.equal(
    matchesQuery(
      'Office of Financial Aid: Scholarships',
      'financial scholarships',
    ),
    true,
  );
  assert.equal(
    matchesQuery('Office of Financial Aid', 'financial housing'),
    false,
  );
});
test('empty directory query shows content and unrelated queries do not', () => {
  assert.equal(matchesQuery('Housing support', ''), true);
  assert.equal(matchesQuery('Housing support', 'zzzzunmatched'), false);
});
test('content routes are unique and all resource categories are defined', () => {
  for (const collection of [departments, initiatives, categories, offices]) {
    assert.equal(
      new Set(collection.map((item) => item.slug)).size,
      collection.length,
    );
  }
  const categorySlugs = new Set(categories.map((category) => category.slug));
  for (const office of offices) {
    for (const slug of office.categories)
      assert.ok(categorySlugs.has(slug), `${office.name}: ${slug}`);
    assert.match(office.phone, /^\d{3}-\d{3}-\d{4}$/);
  }
});
test('all six platform priorities contain commitments and do not invent evidence', () => {
  assert.equal(initiatives.length, 6);
  for (const initiative of initiatives) {
    assert.ok(initiative.commitments.length > 0, initiative.title);
    assert.equal(initiative.evidence.length, 0);
  }
});
