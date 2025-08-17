import { z } from 'zod';
export const GameMapFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  minLevel: z.number().int(),
  maxLevel: z.number().int(),
  difficulty: z.unknown(),
  backgroundImage: z.string().optional(),
  createdAt: z.date(),
  monsters: z.array(z.unknown())
}));