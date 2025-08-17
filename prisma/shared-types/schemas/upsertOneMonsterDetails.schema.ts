import { z } from 'zod';
import { MonsterDetailsSelectObjectSchema } from './objects/MonsterDetailsSelect.schema';
import { MonsterDetailsIncludeObjectSchema } from './objects/MonsterDetailsInclude.schema';
import { MonsterDetailsWhereUniqueInputObjectSchema } from './objects/MonsterDetailsWhereUniqueInput.schema';
import { MonsterDetailsCreateInputObjectSchema } from './objects/MonsterDetailsCreateInput.schema';
import { MonsterDetailsUncheckedCreateInputObjectSchema } from './objects/MonsterDetailsUncheckedCreateInput.schema';
import { MonsterDetailsUpdateInputObjectSchema } from './objects/MonsterDetailsUpdateInput.schema';
import { MonsterDetailsUncheckedUpdateInputObjectSchema } from './objects/MonsterDetailsUncheckedUpdateInput.schema'

export const MonsterDetailsUpsertSchema = z.object({ select: MonsterDetailsSelectObjectSchema.optional(), include: MonsterDetailsIncludeObjectSchema.optional(), where: MonsterDetailsWhereUniqueInputObjectSchema, create: z.union([ MonsterDetailsCreateInputObjectSchema, MonsterDetailsUncheckedCreateInputObjectSchema ]), update: z.union([ MonsterDetailsUpdateInputObjectSchema, MonsterDetailsUncheckedUpdateInputObjectSchema ])  })