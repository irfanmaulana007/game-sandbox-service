import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ItemCreateWithoutCharacterInventoryInputObjectSchema } from './ItemCreateWithoutCharacterInventoryInput.schema';
import { ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema } from './ItemUncheckedCreateWithoutCharacterInventoryInput.schema';
import { ItemCreateOrConnectWithoutCharacterInventoryInputObjectSchema } from './ItemCreateOrConnectWithoutCharacterInventoryInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema'

export const ItemCreateNestedOneWithoutCharacterInventoryInputObjectSchema: z.ZodType<Prisma.ItemCreateNestedOneWithoutCharacterInventoryInput, Prisma.ItemCreateNestedOneWithoutCharacterInventoryInput> = z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutCharacterInventoryInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional()
}).strict();
export const ItemCreateNestedOneWithoutCharacterInventoryInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutCharacterInventoryInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional()
}).strict();
