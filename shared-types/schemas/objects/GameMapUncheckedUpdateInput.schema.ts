import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { MapDifficultySchema } from '../enums/MapDifficulty.schema';
import { EnumMapDifficultyFieldUpdateOperationsInputObjectSchema } from './EnumMapDifficultyFieldUpdateOperationsInput.schema';
import { MonsterUncheckedUpdateManyWithoutMapNestedInputObjectSchema } from './MonsterUncheckedUpdateManyWithoutMapNestedInput.schema'

export const GameMapUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.GameMapUncheckedUpdateInput, Prisma.GameMapUncheckedUpdateInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  minLevel: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  maxLevel: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  difficulty: z.union([MapDifficultySchema, z.lazy(() => EnumMapDifficultyFieldUpdateOperationsInputObjectSchema)]).optional(),
  backgroundImage: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  monsters: z.lazy(() => MonsterUncheckedUpdateManyWithoutMapNestedInputObjectSchema).optional()
}).strict();
export const GameMapUncheckedUpdateInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  minLevel: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  maxLevel: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  difficulty: z.union([MapDifficultySchema, z.lazy(() => EnumMapDifficultyFieldUpdateOperationsInputObjectSchema)]).optional(),
  backgroundImage: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  monsters: z.lazy(() => MonsterUncheckedUpdateManyWithoutMapNestedInputObjectSchema).optional()
}).strict();
