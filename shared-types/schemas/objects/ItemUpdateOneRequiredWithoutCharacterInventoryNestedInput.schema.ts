import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ItemCreateWithoutCharacterInventoryInputObjectSchema } from './ItemCreateWithoutCharacterInventoryInput.schema';
import { ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema } from './ItemUncheckedCreateWithoutCharacterInventoryInput.schema';
import { ItemCreateOrConnectWithoutCharacterInventoryInputObjectSchema } from './ItemCreateOrConnectWithoutCharacterInventoryInput.schema';
import { ItemUpsertWithoutCharacterInventoryInputObjectSchema } from './ItemUpsertWithoutCharacterInventoryInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './ItemWhereUniqueInput.schema';
import { ItemUpdateToOneWithWhereWithoutCharacterInventoryInputObjectSchema } from './ItemUpdateToOneWithWhereWithoutCharacterInventoryInput.schema';
import { ItemUpdateWithoutCharacterInventoryInputObjectSchema } from './ItemUpdateWithoutCharacterInventoryInput.schema';
import { ItemUncheckedUpdateWithoutCharacterInventoryInputObjectSchema } from './ItemUncheckedUpdateWithoutCharacterInventoryInput.schema'

export const ItemUpdateOneRequiredWithoutCharacterInventoryNestedInputObjectSchema: z.ZodType<Prisma.ItemUpdateOneRequiredWithoutCharacterInventoryNestedInput, Prisma.ItemUpdateOneRequiredWithoutCharacterInventoryNestedInput> = z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutCharacterInventoryInputObjectSchema).optional(),
  upsert: z.lazy(() => ItemUpsertWithoutCharacterInventoryInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ItemUpdateToOneWithWhereWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUpdateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutCharacterInventoryInputObjectSchema)]).optional()
}).strict();
export const ItemUpdateOneRequiredWithoutCharacterInventoryNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => ItemCreateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedCreateWithoutCharacterInventoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ItemCreateOrConnectWithoutCharacterInventoryInputObjectSchema).optional(),
  upsert: z.lazy(() => ItemUpsertWithoutCharacterInventoryInputObjectSchema).optional(),
  connect: z.lazy(() => ItemWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ItemUpdateToOneWithWhereWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUpdateWithoutCharacterInventoryInputObjectSchema), z.lazy(() => ItemUncheckedUpdateWithoutCharacterInventoryInputObjectSchema)]).optional()
}).strict();
