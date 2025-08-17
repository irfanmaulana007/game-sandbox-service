import { z } from 'zod';
import { MonsterDetailsSelectObjectSchema } from './objects/MonsterDetailsSelect.schema';
import { MonsterDetailsIncludeObjectSchema } from './objects/MonsterDetailsInclude.schema';
import { MonsterDetailsCreateInputObjectSchema } from './objects/MonsterDetailsCreateInput.schema';
import { MonsterDetailsUncheckedCreateInputObjectSchema } from './objects/MonsterDetailsUncheckedCreateInput.schema'

export const MonsterDetailsCreateOneSchema = z.object({ select: MonsterDetailsSelectObjectSchema.optional(), include: MonsterDetailsIncludeObjectSchema.optional(), data: z.union([MonsterDetailsCreateInputObjectSchema, MonsterDetailsUncheckedCreateInputObjectSchema])  })