import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ItemIncludeObjectSchema } from './objects/ItemInclude.schema';
import { ItemOrderByWithRelationInputObjectSchema } from './objects/ItemOrderByWithRelationInput.schema';
import { ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema';
import { ItemWhereUniqueInputObjectSchema } from './objects/ItemWhereUniqueInput.schema';
import { ItemScalarFieldEnumSchema } from './enums/ItemScalarFieldEnum.schema';
import { CharacterInventoryArgsObjectSchema } from './objects/CharacterInventoryArgs.schema';
import { ItemCountOutputTypeArgsObjectSchema } from './objects/ItemCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ItemFindFirstSelectSchema: z.ZodType<Prisma.ItemSelect, Prisma.ItemSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    description: z.boolean().optional(),
    effectValue: z.boolean().optional(),
    rarity: z.boolean().optional(),
    dropRate: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    characterInventory: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ItemFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    description: z.boolean().optional(),
    effectValue: z.boolean().optional(),
    rarity: z.boolean().optional(),
    dropRate: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    characterInventory: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ItemFindFirstSchema: z.ZodType<Prisma.ItemFindFirstArgs, Prisma.ItemFindFirstArgs> = z.object({ select: ItemFindFirstSelectSchema.optional(), include: z.lazy(() => ItemIncludeObjectSchema.optional()), orderBy: z.union([ItemOrderByWithRelationInputObjectSchema, ItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ItemWhereInputObjectSchema.optional(), cursor: ItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ItemScalarFieldEnumSchema, ItemScalarFieldEnumSchema.array()]).optional() }).strict();

export const ItemFindFirstZodSchema = z.object({ select: ItemFindFirstSelectSchema.optional(), include: z.lazy(() => ItemIncludeObjectSchema.optional()), orderBy: z.union([ItemOrderByWithRelationInputObjectSchema, ItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: ItemWhereInputObjectSchema.optional(), cursor: ItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ItemScalarFieldEnumSchema, ItemScalarFieldEnumSchema.array()]).optional() }).strict();