import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

export const CharacterInventoryScalarWhereInputObjectSchema: z.ZodType<Prisma.CharacterInventoryScalarWhereInput, Prisma.CharacterInventoryScalarWhereInput> = z.object({
  AND: z.union([z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  itemId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
export const CharacterInventoryScalarWhereInputObjectZodSchema = z.object({
  AND: z.union([z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema), z.lazy(() => CharacterInventoryScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  characterId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  itemId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
}).strict();
