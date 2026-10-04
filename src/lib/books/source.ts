import { Book } from './types';

export interface BookSource {
  name: string;
  getBooks(): Promise<Book[]>;
}
