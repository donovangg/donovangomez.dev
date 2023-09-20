// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    datePublished: z.date(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
    imgSrc: z.string(),
    github: z.string(),
    stack: z.array(z.object({ name: z.string(), logo: z.string() })),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    date: z.date(),
    title: z.string(),
    description: z.string(),
    imgSrc: z.string(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectCollection,
  blog: blogCollection,
};
