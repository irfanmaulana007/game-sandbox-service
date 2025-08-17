import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { CharacterScalarRelationFilterObjectSchema } from './CharacterScalarRelationFilter.schema';
import { CharacterWhereInputObjectSchema } from './CharacterWhereInput.schema';
import { ItemScalarRelationFilterObjectSchema } from './ItemScalarRelationFilter.schema';
import { ItemWhereInputObjectSchema } from './ItemWhereInput.schema'

export const CharacterInventoryWhereInputObjectSchema: z.ZodType<Prisma.CharacterInventoryWhereInput, Prisma.CharacterInventoryWhereInput> = z.object({
  AND: z.union([z.lazy(() => CharacterInventoryWhereInputObjectSchema), z.lazy(() => CharacterInventoryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterInventoryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterInventoryWhereInputObjectSchema), z.lazy(() => CharacterInventoryWhereInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  itemId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  character: z.union([z.lazy(() => CharacterScalarRelationFilterObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema)]).optional(),
  item: z.union([z.lazy(() => ItemScalarRelationFilterObjectSchema), z.lazy(() => ItemWhereInputObjectSchema)]).optional()
}).strict();
export const CharacterInventoryWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => CharacterInventoryWhereInputObjectSchema), z.lazy(() => CharacterInventoryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterInventoryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterInventoryWhereInputObjectSchema), z.lazy(() => CharacterInventoryWhereInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  itemId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  character: z.union([z.lazy(() => CharacterScalarRelationFilterObjectSchema), z.lazy(() => CharacterWhereInputObjectSchema)]).optional(),
  item: z.union([z.lazy(() => ItemScalarRelationFilterObjectSchema), z.lazy(() => ItemWhereInputObjectSchema)]).optional()
}).strict();
