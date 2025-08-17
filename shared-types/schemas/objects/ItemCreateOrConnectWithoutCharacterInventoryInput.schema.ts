import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemCreateWithoutCharacterInventoryInputObjectSchema } from './ItemCreateWithoutCharacterInventoryInput.schema';
import { ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema } from './ItemUncheckedCreateWithoutCharacterInventoryInput.schema'

export const ItemCreateOrConnectWithoutCharacterInventoryInputObjectSchema: z.ZodType<Prisma.ItemCreateOrConnectWithoutCharacterInventoryInput, Prisma.ItemCreateOrConnectWithoutCharacterInventoryInput> = z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ItemCreateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema)])
}).strict();
export const ItemCreateOrConnectWithoutCharacterInventoryInputObjectZodSchema = z.object({
  where: z.lazy(() => ItemWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ItemCreateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema)])
}).strict();
