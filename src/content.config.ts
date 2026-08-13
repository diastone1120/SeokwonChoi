import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    sheet: z.string(),        // "01", "02" ... — drawing-sheet index shown on the card
    title: z.string(),
    summary: z.string(),      // short card description (homepage grid)
    tags: z.array(z.string()),
    credit: z.string().optional(), // venue / co-authors / advisor line
  }),
});

export const collections = { projects };
