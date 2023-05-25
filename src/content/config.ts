// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        id: z.number(),
      title: z.string(),
      pubDate: z.date(),
      link: z.string(),
      imgSrc: z.string(),
      github: z.string(),
      description: z.string(),
      stack: z.string(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectCollection,
};