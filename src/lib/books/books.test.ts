import { describe, it, expect } from 'vitest';
import { bookSchema } from './types';
import { snapshotSource } from './snapshot';

describe('snapshot source', () => {
  it('returns valid books', async () => {
    const books = await snapshotSource.getBooks();
    expect(books.length).toBeGreaterThan(0);
  });

  it('covers every status', async () => {
    const books = await snapshotSource.getBooks();
    expect(new Set(books.map((b) => b.status))).toEqual(
      new Set(['read', 'to-read', 'dnf']),
    );
  });

  it('has unique ids', async () => {
    const books = await snapshotSource.getBooks();
    expect(new Set(books.map((b) => b.id)).size).toBe(books.length);
  });
});

describe('bookSchema', () => {
  it('rejects an out-of-range rating', () => {
    const result = bookSchema.safeParse({
      id: 'x',
      title: 'T',
      author: 'A',
      status: 'read',
      rating: 9,
      pages: 100,
      dateRead: null,
      review: null,
      goodreadsUrl: 'https://example.com',
    });
    expect(result.success).toBe(false);
  });
});
