import raw from '@/data/books.sample.json';
import { bookSchema } from './types';
import type { BookSource } from './source';

export const snapshotSource: BookSource = {
  name: 'snapshot',
  async getBooks() {
    return bookSchema.array().parse(raw);
  },
};
