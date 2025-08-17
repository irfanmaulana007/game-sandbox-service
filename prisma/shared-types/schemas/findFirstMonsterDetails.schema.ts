import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { MonsterDetailsIncludeObjectSchema } from './objects/MonsterDetailsInclude.schema';
import { MonsterDetailsOrderByWithRelationInputObjectSchema } from './objects/MonsterDetailsOrderByWithRelationInput.schema';
import { MonsterDetailsWhereInputObjectSchema } from './objects/MonsterDetailsWhereInput.schema';
import { MonsterDetailsWhereUniqueInputObjectSchema } from './objects/MonsterDetailsWhereUniqueInput.schema';
import { MonsterDetailsScalarFieldEnumSchema } from './enums/MonsterDetailsScalarFieldEnum.schema';
import { MonsterArgsObjectSchema } from './objects/MonsterArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const MonsterDetailsFindFirstSelectSchema: z.ZodType<Prisma.MonsterDetailsSelect, Prisma.MonsterDetailsSelect> = z.object({
    id: z.boolean().optional(),
    monsterId: z.boolean().optional(),
    rank: z.boolean().optional(),
    description: z.boolean().optional(),
    imageUrl: z.boolean().optional(),
    dropTable: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    monster: z.boolean().optional()
  }).strict();

export const MonsterDetailsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    monsterId: z.boolean().optional(),
    rank: z.boolean().optional(),
    description: z.boolean().optional(),
    imageUrl: z.boolean().optional(),
    dropTable: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    monster: z.boolean().optional()
  }).strict();

export const MonsterDetailsFindFirstSchema: z.ZodType<Prisma.MonsterDetailsFindFirstArgs, Prisma.MonsterDetailsFindFirstArgs> = z.object({ select: MonsterDetailsFindFirstSelectSchema.optional(), include: z.lazy(() => MonsterDetailsIncludeObjectSchema.optional()), orderBy: z.union([MonsterDetailsOrderByWithRelationInputObjectSchema, MonsterDetailsOrderByWithRelationInputObjectSchema.array()]).optional(), where: MonsterDetailsWhereInputObjectSchema.optional(), cursor: MonsterDetailsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MonsterDetailsScalarFieldEnumSchema, MonsterDetailsScalarFieldEnumSchema.array()]).optional() }).strict();

export const MonsterDetailsFindFirstZodSchema = z.object({ select: MonsterDetailsFindFirstSelectSchema.optional(), include: z.lazy(() => MonsterDetailsIncludeObjectSchema.optional()), orderBy: z.union([MonsterDetailsOrderByWithRelationInputObjectSchema, MonsterDetailsOrderByWithRelationInputObjectSchema.array()]).optional(), where: MonsterDetailsWhereInputObjectSchema.optional(), cursor: MonsterDetailsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MonsterDetailsScalarFieldEnumSchema, MonsterDetailsScalarFieldEnumSchema.array()]).optional() }).strict();