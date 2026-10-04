import { z } from 'zod';

export const bookStatusSchema = z.enum(['read', 'to-read', 'dnf']);

export const bookSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  author: z.string().min(1),
  status: bookStatusSchema,
  rating: z.number().int().min(0).max(5), // 0 = unrated
  pages: z.number().int().positive().nullable(), // drives spine width
  dateRead: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .nullable(),
  review: z.string().nullable(),
  goodreadsUrl: z.string().url(),
});

export type Book = z.infer<typeof bookSchema>;
export type BookStatus = z.infer<typeof bookStatusSchema>;
