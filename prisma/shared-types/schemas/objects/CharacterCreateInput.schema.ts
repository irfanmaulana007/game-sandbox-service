import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutCharactersInputObjectSchema } from './UserCreateNestedOneWithoutCharactersInput.schema';
import { JobClassCreateNestedOneWithoutCharactersInputObjectSchema } from './JobClassCreateNestedOneWithoutCharactersInput.schema';
import { CharacterEquipmentCreateNestedManyWithoutCharacterInputObjectSchema } from './CharacterEquipmentCreateNestedManyWithoutCharacterInput.schema';
import { CharacterInventoryCreateNestedManyWithoutCharacterInputObjectSchema } from './CharacterInventoryCreateNestedManyWithoutCharacterInput.schema';
import { BattleLogCreateNestedManyWithoutCharacterInputObjectSchema } from './BattleLogCreateNestedManyWithoutCharacterInput.schema'

export const CharacterCreateInputObjectSchema: z.ZodType<Prisma.CharacterCreateInput, Prisma.CharacterCreateInput> = z.object({
  id: z.string().optional(),
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
  updatedAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCharactersInputObjectSchema),
  job: z.lazy(() => JobClassCreateNestedOneWithoutCharactersInputObjectSchema),
  equipment: z.lazy(() => CharacterEquipmentCreateNestedManyWithoutCharacterInputObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryCreateNestedManyWithoutCharacterInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogCreateNestedManyWithoutCharacterInputObjectSchema).optional()
}).strict();
export const CharacterCreateInputObjectZodSchema = z.object({
  id: z.string().optional(),
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
  updatedAt: z.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCharactersInputObjectSchema),
  job: z.lazy(() => JobClassCreateNestedOneWithoutCharactersInputObjectSchema),
  equipment: z.lazy(() => CharacterEquipmentCreateNestedManyWithoutCharacterInputObjectSchema).optional(),
  inventory: z.lazy(() => CharacterInventoryCreateNestedManyWithoutCharacterInputObjectSchema).optional(),
  battleLogs: z.lazy(() => BattleLogCreateNestedManyWithoutCharacterInputObjectSchema).optional()
}).strict();
