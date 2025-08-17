import { z } from 'zod';
export const JobClassFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().optional(),
  baseHealth: z.number().int(),
  baseAttack: z.number().int(),
  baseDefense: z.number().int(),
  baseSpeed: z.number().int(),
  baseCritical: z.number().int(),
  healthPerLevel: z.number().int(),
  attackPerLevel: z.number().int(),
  defensePerLevel: z.number().int(),
  speedPerLevel: z.number().int(),
  criticalPerLevel: z.number().int(),
  characters: z.array(z.unknown())
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