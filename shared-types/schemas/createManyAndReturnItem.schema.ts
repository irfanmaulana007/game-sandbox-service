import { z } from 'zod';
import { ItemSelectObjectSchema } from './objects/ItemSelect.schema';
import { ItemIncludeObjectSchema } from './objects/ItemInclude.schema';
import { ItemCreateManyInputObjectSchema } from './objects/ItemCreateManyInput.schema'

export const ItemCreateManyAndReturnSchema = z.object({ select: ItemSelectObjectSchema.optional(), include: ItemIncludeObjectSchema.optional(), data: z.union([ ItemCreateManyInputObjectSchema, z.array(ItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() })