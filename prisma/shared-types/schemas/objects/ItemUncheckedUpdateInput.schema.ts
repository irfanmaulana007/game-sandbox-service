import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { RaritySchema } from '../enums/Rarity.schema';
import { EnumRarityFieldUpdateOperationsInputObjectSchema } from './EnumRarityFieldUpdateOperationsInput.schema';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { CharacterInventoryUncheckedUpdateManyWithoutItemNestedInputObjectSchema } from './CharacterInventoryUncheckedUpdateManyWithoutItemNestedInput.schema'

export const ItemUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ItemUncheckedUpdateInput, Prisma.ItemUncheckedUpdateInput> = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  effectValue: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).nullish(),
  rarity: z.union([RaritySchema, z.lazy(() => EnumRarityFieldUpdateOperationsInputObjectSchema)]).optional(),
  dropRate: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  characterInventory: z.lazy(() => CharacterInventoryUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional()
}).strict();
export const ItemUncheckedUpdateInputObjectZodSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).nullish(),
  effectValue: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).nullish(),
  rarity: z.union([RaritySchema, z.lazy(() => EnumRarityFieldUpdateOperationsInputObjectSchema)]).optional(),
  dropRate: z.union([z.number(), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  characterInventory: z.lazy(() => CharacterInventoryUncheckedUpdateManyWithoutItemNestedInputObjectSchema).optional()
}).strict();
