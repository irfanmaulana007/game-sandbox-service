import { z } from 'zod';
import { MonsterDetailsSelectObjectSchema } from './objects/MonsterDetailsSelect.schema';
import { MonsterDetailsIncludeObjectSchema } from './objects/MonsterDetailsInclude.schema';
import { MonsterDetailsUpdateInputObjectSchema } from './objects/MonsterDetailsUpdateInput.schema';
import { MonsterDetailsUncheckedUpdateInputObjectSchema } from './objects/MonsterDetailsUncheckedUpdateInput.schema';
import { MonsterDetailsWhereUniqueInputObjectSchema } from './objects/MonsterDetailsWhereUniqueInput.schema'

export const MonsterDetailsUpdateOneSchema = z.object({ select: MonsterDetailsSelectObjectSchema.optional(), include: MonsterDetailsIncludeObjectSchema.optional(), data: z.union([MonsterDetailsUpdateInputObjectSchema, MonsterDetailsUncheckedUpdateInputObjectSchema]), where: MonsterDetailsWhereUniqueInputObjectSchema  })