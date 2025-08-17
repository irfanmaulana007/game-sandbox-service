import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutInventoryInputObjectSchema } from './CharacterCreateWithoutInventoryInput.schema';
import { CharacterUncheckedCreateWithoutInventoryInputObjectSchema } from './CharacterUncheckedCreateWithoutInventoryInput.schema';
import { CharacterCreateOrConnectWithoutInventoryInputObjectSchema } from './CharacterCreateOrConnectWithoutInventoryInput.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema'

export const CharacterCreateNestedOneWithoutInventoryInputObjectSchema: z.ZodType<Prisma.CharacterCreateNestedOneWithoutInventoryInput, Prisma.CharacterCreateNestedOneWithoutInventoryInput> = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutInventoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutInventoryInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional()
}).strict();
export const CharacterCreateNestedOneWithoutInventoryInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutInventoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutInventoryInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional()
}).strict();
