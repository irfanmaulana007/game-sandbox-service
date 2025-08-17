import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const EquipmentCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EquipmentCountOutputTypeSelect, Prisma.EquipmentCountOutputTypeSelect> = z.object({
  characterEquipment: z.boolean().optional()
}).strict();
export const EquipmentCountOutputTypeSelectObjectZodSchema = z.object({
  characterEquipment: z.boolean().optional()
}).strict();
