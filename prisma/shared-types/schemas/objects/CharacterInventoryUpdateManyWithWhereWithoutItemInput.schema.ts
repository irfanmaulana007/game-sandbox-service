import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterInventoryScalarWhereInputObjectSchema } from './CharacterInventoryScalarWhereInput.schema';
import { CharacterInventoryUpdateManyMutationInputObjectSchema } from './CharacterInventoryUpdateManyMutationInput.schema';
import { CharacterInventoryUncheckedUpdateManyWithoutItemInputObjectSchema } from './CharacterInventoryUncheckedUpdateManyWithoutItemInput.schema'

export const CharacterInventoryUpdateManyWithWhereWithoutItemInputObjectSchema: z.ZodType<Prisma.CharacterInventoryUpdateManyWithWhereWithoutItemInput, Prisma.CharacterInventoryUpdateManyWithWhereWithoutItemInput> = z.object({
  where: z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterInventoryUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateManyWithoutItemInputObjectSchema)])
}).strict();
export const CharacterInventoryUpdateManyWithWhereWithoutItemInputObjectZodSchema = z.object({
  where: z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CharacterInventoryUpdateManyMutationInputObjectSchema), z.lazy(() => CharacterInventoryUncheckedUpdateManyWithoutItemInputObjectSchema)])
}).strict();
