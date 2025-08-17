import { z } from 'zod';
export const MonsterFindManyResultSchema = z.object({
  data: z.array(z.object({
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