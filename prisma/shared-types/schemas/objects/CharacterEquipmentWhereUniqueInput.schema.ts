import { z } from 'zod';
import type { Prisma } from '@prisma/client';


export const CharacterEquipmentWhereUniqueInputObjectSchema: z.ZodType<Prisma.CharacterEquipmentWhereUniqueInput, Prisma.CharacterEquipmentWhereUniqueInput> = z.object({
  id: z.string()
}).strict();
export const CharacterEquipmentWhereUniqueInputObjectZodSchema = z.object({
  id: z.string()
}).strict();
