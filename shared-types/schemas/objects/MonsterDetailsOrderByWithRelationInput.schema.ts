import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MonsterOrderByWithRelationInputObjectSchema } from './MonsterOrderByWithRelationInput.schema'

export const MonsterDetailsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.MonsterDetailsOrderByWithRelationInput, Prisma.MonsterDetailsOrderByWithRelationInput> = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  rank: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  imageUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dropTable: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  monster: z.lazy(() => MonsterOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const MonsterDetailsOrderByWithRelationInputObjectZodSchema = z.object({
  id: SortOrderSchema.optional(),
  monsterId: SortOrderSchema.optional(),
  rank: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  imageUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dropTable: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  monster: z.lazy(() => MonsterOrderByWithRelationInputObjectSchema).optional()
}).strict();
