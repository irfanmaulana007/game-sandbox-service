import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema';
import { ItemUpdateWithoutCharacterInventoryInputObjectSchema } from './ItemUpdateWithoutCharacterInventoryInput.schema';
import { ItemUncheckedUpdateWithoutCharacterInventoryInputObjectSchema } from './ItemUncheckedUpdateWithoutCharacterInventoryInput.schema'

export const ItemUpdateToOneWithWhereWithoutCharacterInventoryInputObjectSchema: z.ZodType<Prisma.ItemUpdateToOneWithWhereWithoutCharacterInventoryInput, Prisma.ItemUpdateToOneWithWhereWithoutCharacterInventoryInput> = z.object({
  where: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ItemUpdateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutCharacterInventoryInputObjectSchema)])
}).strict();
export const ItemUpdateToOneWithWhereWithoutCharacterInventoryInputObjectZodSchema = z.object({
  where: z.lazy(() => ItemWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ItemUpdateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutCharacterInventoryInputObjectSchema)])
}).strict();
