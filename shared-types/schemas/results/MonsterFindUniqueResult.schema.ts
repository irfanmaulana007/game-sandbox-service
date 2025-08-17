import { z } from 'zod';
export const MonsterFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  level: z.number().int(),
  health: z.number().int(),
  attack: z.number().int(),
  defense: z.number().int(),
  speed: z.number().int(),
  critical: z.number().int(),
  experienceReward: z.number().int(),
  goldReward: z.number().int(),
  mapId: z.number().int().optional(),
  createdAt: z.date(),
  map: z.unknown().optional(),
  details: z.unknown().optional(),
  battleLogs: z.array(z.unknown())
}));