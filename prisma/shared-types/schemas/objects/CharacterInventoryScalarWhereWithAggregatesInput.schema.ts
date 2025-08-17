import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

export const CharacterInventoryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CharacterInventoryScalarWhereWithAggregatesInput, Prisma.CharacterInventoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([z.lazy(() => CharacterInventoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterInventoryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterInventoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  itemId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const CharacterInventoryScalarWhereWithAggregatesInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => CharacterInventoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterInventoryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterInventoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  characterId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  itemId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
