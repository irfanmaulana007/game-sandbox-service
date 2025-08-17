import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterEquipmentUncheckedCreateNestedManyWithoutCharacterInputObjectSchema } from './CharacterEquipmentUncheckedCreateNestedManyWithoutCharacterInput.schema';
import { CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInputObjectSchema } from './CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInput.schema';
import { BattleLogUncheckedCreateNestedManyWithoutCharacterInputObjectSchema } from './BattleLogUncheckedCreateNestedManyWithoutCharacterInput.schema'

export const CharacterUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CharacterUncheckedCreateInput, Prisma.CharacterUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  name: z.string(),
  jobId: z.number().int(),
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
  updatedAt: z.date().optional(),
  equipment: z.lazy(() => CharacterEquipmentUncheckedCreateNestedManyWithoutCharacterInputObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUncheckedCreateNestedManyWithoutCharacterInputObjectSchema).optional()
}).strict();
export const CharacterUncheckedCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
  userId: z.string(),
  name: z.string(),
  jobId: z.number().int(),
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
  updatedAt: z.date().optional(),
  equipment: z.lazy(() => CharacterEquipmentUncheckedCreateNestedManyWithoutCharacterInputObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryUncheckedCreateNestedManyWithoutCharacterInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogUncheckedCreateNestedManyWithoutCharacterInputObjectSchema).optional()
}).strict();
