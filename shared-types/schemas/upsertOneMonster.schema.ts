import { z } from 'zod';
import { MonsterSelectObjectSchema } from './objects/MonsterSelect.schema';
import { MonsterIncludeObjectSchema } from './objects/MonsterInclude.schema';
import { MonsterWhereUniqueInputObjectSchema } from './objects/MonsterWhereUniqueInput.schema';
import { MonsterCreateInputObjectSchema } from './objects/MonsterCreateInput.schema';
import { MonsterUncheckedCreateInputObjectSchema } from './objects/MonsterUncheckedCreateInput.schema';
import { MonsterUpdateInputObjectSchema } from './objects/MonsterUpdateInput.schema';
import { MonsterUncheckedUpdateInputObjectSchema } from './objects/MonsterUncheckedUpdateInput.schema'

export const MonsterUpsertSchema = z.object({ select: MonsterSelectObjectSchema.optional(), include: MonsterIncludeObjectSchema.optional(), where: MonsterWhereUniqueInputObjectSchema, create: z.union([ MonsterCreateInputObjectSchema, MonsterUncheckedCreateInputObjectSchema ]), update: z.union([ MonsterUpdateInputObjectSchema, MonsterUncheckedUpdateInputObjectSchema ])  })