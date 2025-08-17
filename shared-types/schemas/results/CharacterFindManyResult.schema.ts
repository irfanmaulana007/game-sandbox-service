import { z } from 'zod';
export const CharacterFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string(),
  name: z.string(),
  jobId: z.number().int(),
  level: z.number().int(),
  experience: z.number().int(),
  health: z.number().int(),
  maxHealth: z.number().int(),
  attack: z.number().int(),
  defense: z.number().int(),
  speed: z.number().int(),
  critical: z.number().int(),
  statusPoints: z.number().int(),
  gold: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  job: z.unknown(),
  equipment: z.array(z.unknown()),
  inventory: z.array(z.unknown()),
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