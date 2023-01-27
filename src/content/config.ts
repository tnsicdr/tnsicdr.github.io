import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    date: z.string().transform((str) => new Date(str)),
    title: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false), 
  }),
});

export const collections = {
  'blog': blogCollection,
};
