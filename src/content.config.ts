import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    sheet: z.string(),        // "01", "02" ... — drawing-sheet index shown on the card
    title: z.string(),
    summary: z.string(),      // short card description (homepage grid)
    year: z.string(),         // "2024" or a range like "2018–2024"
    tags: z.array(z.string()),
    category: z.enum(['research', 'design', 'field']),
    image: z.string().optional(),  // 예: "/images/01-lattice-photo.jpg"
    heroSize: z.enum(['default', 'small']).optional(), // 'small'이면 상세페이지 hero를 작게 표시
    credit: z.string().optional(), // venue / co-authors / advisor line
  }),
});

export const collections = { projects };
