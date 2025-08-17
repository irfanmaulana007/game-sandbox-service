import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const MonsterCreateManyMapInputObjectSchema: z.ZodType<Prisma.MonsterCreateManyMapInput, Prisma.MonsterCreateManyMapInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  level: z.number().int().optional(),
  health: z.number().int(),
  attack: z.number().int(),
  defense: z.number().int(),
  speed: z.number().int(),
  critical: z.number().int(),
  experienceReward: z.number().int().optional(),
  goldReward: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
export const MonsterCreateManyMapInputObjectZodSchema = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  level: z.number().int().optional(),
  health: z.number().int(),
  attack: z.number().int(),
  defense: z.number().int(),
  speed: z.number().int(),
  critical: z.number().int(),
  experienceReward: z.number().int().optional(),
  goldReward: z.number().int().optional(),
  createdAt: z.date().optional()
}).strict();
