import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const EquipmentWhereUniqueInputObjectSchema: z.ZodType<Prisma.EquipmentWhereUniqueInput, Prisma.EquipmentWhereUniqueInput> = z.object({
  id: z.number().int()
}).strict();
export const EquipmentWhereUniqueInputObjectZodSchema = z.object({
  id: z.number().int()
}).strict();
