import { z } from 'zod';
export const MonsterDetailsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  monsterId: z.number().int(),
  rank: z.unknown(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  dropTable: z.unknown().optional(),
  createdAt: z.date(),
  monster: z.unknown()
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