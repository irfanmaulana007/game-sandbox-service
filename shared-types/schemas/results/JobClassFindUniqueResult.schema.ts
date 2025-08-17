import { z } from 'zod';
export const JobClassFindUniqueResultSchema = z.nullable(z.object({
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
}));