import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JobClassIncludeObjectSchema } from './objects/JobClassInclude.schema';
import { JobClassOrderByWithRelationInputObjectSchema } from './objects/JobClassOrderByWithRelationInput.schema';
import { JobClassWhereInputObjectSchema } from './objects/JobClassWhereInput.schema';
import { JobClassWhereUniqueInputObjectSchema } from './objects/JobClassWhereUniqueInput.schema';
import { JobClassScalarFieldEnumSchema } from './enums/JobClassScalarFieldEnum.schema';
import { CharacterArgsObjectSchema } from './objects/CharacterArgs.schema';
import { JobClassCountOutputTypeArgsObjectSchema } from './objects/JobClassCountOutputTypeArgs.schema'

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const JobClassFindFirstSelectSchema: z.ZodType<Prisma.JobClassSelect, Prisma.JobClassSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    baseHealth: z.boolean().optional(),
    baseAttack: z.boolean().optional(),
    baseDefense: z.boolean().optional(),
    baseSpeed: z.boolean().optional(),
    baseCritical: z.boolean().optional(),
    healthPerLevel: z.boolean().optional(),
    attackPerLevel: z.boolean().optional(),
    defensePerLevel: z.boolean().optional(),
    speedPerLevel: z.boolean().optional(),
    criticalPerLevel: z.boolean().optional(),
    characters: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const JobClassFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    baseHealth: z.boolean().optional(),
    baseAttack: z.boolean().optional(),
    baseDefense: z.boolean().optional(),
    baseSpeed: z.boolean().optional(),
    baseCritical: z.boolean().optional(),
    healthPerLevel: z.boolean().optional(),
    attackPerLevel: z.boolean().optional(),
    defensePerLevel: z.boolean().optional(),
    speedPerLevel: z.boolean().optional(),
    criticalPerLevel: z.boolean().optional(),
    characters: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const JobClassFindFirstSchema: z.ZodType<Prisma.JobClassFindFirstArgs, Prisma.JobClassFindFirstArgs> = z.object({ select: JobClassFindFirstSelectSchema.optional(), include: z.lazy(() => JobClassIncludeObjectSchema.optional()), orderBy: z.union([JobClassOrderByWithRelationInputObjectSchema, JobClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobClassWhereInputObjectSchema.optional(), cursor: JobClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([JobClassScalarFieldEnumSchema, JobClassScalarFieldEnumSchema.array()]).optional() }).strict();

export const JobClassFindFirstZodSchema = z.object({ select: JobClassFindFirstSelectSchema.optional(), include: z.lazy(() => JobClassIncludeObjectSchema.optional()), orderBy: z.union([JobClassOrderByWithRelationInputObjectSchema, JobClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: JobClassWhereInputObjectSchema.optional(), cursor: JobClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([JobClassScalarFieldEnumSchema, JobClassScalarFieldEnumSchema.array()]).optional() }).strict();