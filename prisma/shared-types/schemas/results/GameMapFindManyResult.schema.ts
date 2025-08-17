import { z } from 'zod';
export const GameMapFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  minLevel: z.number().int(),
  maxLevel: z.number().int(),
  difficulty: z.unknown(),
  backgroundImage: z.string().optional(),
  createdAt: z.date(),
  monsters: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});