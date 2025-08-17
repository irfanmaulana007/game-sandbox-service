import { z } from 'zod';
import { ItemSelectObjectSchema } from './objects/ItemSelect.schema';
import { ItemIncludeObjectSchema } from './objects/ItemInclude.schema';
import { ItemUpdateManyMutationInputObjectSchema } from './objects/ItemUpdateManyMutationInput.schema';
import { ItemWhereInputObjectSchema } from './objects/ItemWhereInput.schema'

export const ItemUpdateManyAndReturnSchema = z.object({ select: ItemSelectObjectSchema.optional(), include: ItemIncludeObjectSchema.optional(), data: ItemUpdateManyMutationInputObjectSchema, where: ItemWhereInputObjectSchema.optional()  })