import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    date: z.string().transform((str) => new Date(str)),
    title: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const notesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  notes: notesCollection,
};
