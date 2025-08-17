import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ItemUpdateWithoutCharacterInventoryInputObjectSchema } from './ItemUpdateWithoutCharacterInventoryInput.schema';
import { ItemUncheckedUpdateWithoutCharacterInventoryInputObjectSchema } from './ItemUncheckedUpdateWithoutCharacterInventoryInput.schema';
import { ItemCreateWithoutCharacterInventoryInputObjectSchema } from './ItemCreateWithoutCharacterInventoryInput.schema';
import { ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema } from './ItemUncheckedCreateWithoutCharacterInventoryInput.schema';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

export const ItemUpsertWithoutCharacterInventoryInputObjectSchema: z.ZodType<Prisma.ItemUpsertWithoutCharacterInventoryInput, Prisma.ItemUpsertWithoutCharacterInventoryInput> = z.object({
  update: z.union([z.lazy(() => ItemUpdateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutCharacterInventoryInputObjectSchema)]),
  create: z.union([z.lazy(() => ItemCreateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema)]),
  where: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
export const ItemUpsertWithoutCharacterInventoryInputObjectZodSchema = z.object({
  update: z.union([z.lazy(() => ItemUpdateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutCharacterInventoryInputObjectSchema)]),
  create: z.union([z.lazy(() => ItemCreateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema)]),
  where: z.lazy(() => ItemWhereInputObjectSchema).optional()
}).strict();
