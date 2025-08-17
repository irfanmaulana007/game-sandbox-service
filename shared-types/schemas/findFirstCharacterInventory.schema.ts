import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { CharacterInventoryIncludeObjectSchema } from './objects/CharacterInventoryInclude.schema';
import { CharacterInventoryOrderByWithRelationInputObjectSchema } from './objects/CharacterInventoryOrderByWithRelationInput.schema';
import { CharacterInventoryWhereInputObjectSchema } from './objects/CharacterInventoryWhereInput.schema';
import { CharacterInventoryWhereUniqueInputObjectSchema } from './objects/CharacterInventoryWhereUniqueInput.schema';
import { CharacterInventoryScalarFieldEnumSchema } from './enums/CharacterInventoryScalarFieldEnum.schema';
import { CharacterArgsObjectSchema } from './objects/CharacterArgs.schema';
import { ItemArgsObjectSchema } from './objects/ItemArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CharacterInventoryFindFirstSelectSchema: z.ZodType<Prisma.CharacterInventorySelect, Prisma.CharacterInventorySelect> = z.object({
    id: z.boolean().optional(),
    characterId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    character: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict();

export const CharacterInventoryFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    characterId: z.boolean().optional(),
    itemId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    character: z.boolean().optional(),
    item: z.boolean().optional()
  }).strict();

export const CharacterInventoryFindFirstSchema: z.ZodType<Prisma.CharacterInventoryFindFirstArgs, Prisma.CharacterInventoryFindFirstArgs> = z.object({ select: CharacterInventoryFindFirstSelectSchema.optional(), include: z.lazy(() => CharacterInventoryIncludeObjectSchema.optional()), orderBy: z.union([CharacterInventoryOrderByWithRelationInputObjectSchema, CharacterInventoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterInventoryWhereInputObjectSchema.optional(), cursor: CharacterInventoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CharacterInventoryScalarFieldEnumSchema, CharacterInventoryScalarFieldEnumSchema.array()]).optional() }).strict();

export const CharacterInventoryFindFirstZodSchema = z.object({ select: CharacterInventoryFindFirstSelectSchema.optional(), include: z.lazy(() => CharacterInventoryIncludeObjectSchema.optional()), orderBy: z.union([CharacterInventoryOrderByWithRelationInputObjectSchema, CharacterInventoryOrderByWithRelationInputObjectSchema.array()]).optional(), where: CharacterInventoryWhereInputObjectSchema.optional(), cursor: CharacterInventoryWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([CharacterInventoryScalarFieldEnumSchema, CharacterInventoryScalarFieldEnumSchema.array()]).optional() }).strict();