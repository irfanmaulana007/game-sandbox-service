import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateWithoutInventoryInputObjectSchema } from './CharacterCreateWithoutInventoryInput.schema';
import { CharacterUncheckedCreateWithoutInventoryInputObjectSchema } from './CharacterUncheckedCreateWithoutInventoryInput.schema';
import { CharacterCreateOrConnectWithoutInventoryInputObjectSchema } from './CharacterCreateOrConnectWithoutInventoryInput.schema';
import { CharacterUpsertWithoutInventoryInputObjectSchema } from './CharacterUpsertWithoutInventoryInput.schema';
import { CharacterWhereUniqueInputObjectSchema } from './CharacterWhereUniqueInput.schema';
import { CharacterUpdateToOneWithWhereWithoutInventoryInputObjectSchema } from './CharacterUpdateToOneWithWhereWithoutInventoryInput.schema';
import { CharacterUpdateWithoutInventoryInputObjectSchema } from './CharacterUpdateWithoutInventoryInput.schema';
import { CharacterUncheckedUpdateWithoutInventoryInputObjectSchema } from './CharacterUncheckedUpdateWithoutInventoryInput.schema'

export const CharacterUpdateOneRequiredWithoutInventoryNestedInputObjectSchema: z.ZodType<Prisma.CharacterUpdateOneRequiredWithoutInventoryNestedInput, Prisma.CharacterUpdateOneRequiredWithoutInventoryNestedInput> = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutInventoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutInventoryInputObjectSchema).optional(),
  upsert: z.lazy(() => CharacterUpsertWithoutInventoryInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CharacterUpdateToOneWithWhereWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUpdateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutInventoryInputObjectSchema)]).optional()
}).strict();
export const CharacterUpdateOneRequiredWithoutInventoryNestedInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => CharacterCreateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedCreateWithoutInventoryInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CharacterCreateOrConnectWithoutInventoryInputObjectSchema).optional(),
  upsert: z.lazy(() => CharacterUpsertWithoutInventoryInputObjectSchema).optional(),
  connect: z.lazy(() => CharacterWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CharacterUpdateToOneWithWhereWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUpdateWithoutInventoryInputObjectSchema), z.lazy(() => CharacterUncheckedUpdateWithoutInventoryInputObjectSchema)]).optional()
}).strict();
