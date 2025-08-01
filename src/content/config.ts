import { defineCollection, z } from "astro:content";

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.number(),
    description: z.string(),
    buy: z.object({
      spain: z.string().optional(),
      usa: z.string().optional()
    }),
  }),
});

export const collections = { books };