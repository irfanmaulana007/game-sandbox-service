import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterCreateManyJobInputObjectSchema: z.ZodType<Prisma.CharacterCreateManyJobInput, Prisma.CharacterCreateManyJobInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  name: z.string(),
  level: z.number().int().optional(),
  experience: z.number().int().optional(),
  health: z.number().int(),
  maxHealth: z.number().int(),
  attack: z.number().int(),
  defense: z.number().int(),
  speed: z.number().int(),
  critical: z.number().int(),
  statusPoints: z.number().int().optional(),
  gold: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const CharacterCreateManyJobInputObjectZodSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  name: z.string(),
  level: z.number().int().optional(),
  experience: z.number().int().optional(),
  health: z.number().int(),
  maxHealth: z.number().int(),
  attack: z.number().int(),
  defense: z.number().int(),
  speed: z.number().int(),
  critical: z.number().int(),
  statusPoints: z.number().int().optional(),
  gold: z.number().int().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
