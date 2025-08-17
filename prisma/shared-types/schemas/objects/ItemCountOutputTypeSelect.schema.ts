import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const ItemCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ItemCountOutputTypeSelect, Prisma.ItemCountOutputTypeSelect> = z.object({
  characterInventory: z.boolean().optional()
}).strict();
export const ItemCountOutputTypeSelectObjectZodSchema = z.object({
  characterInventory: z.boolean().optional()
}).strict();
