import { z } from 'zod';
export const MonsterDetailsCreateResultSchema = z.object({
  id: z.number().int(),
  monsterId: z.number().int(),
  rank: z.unknown(),
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  dropTable: z.unknown().optional(),
  createdAt: z.date(),
  monster: z.unknown()
});