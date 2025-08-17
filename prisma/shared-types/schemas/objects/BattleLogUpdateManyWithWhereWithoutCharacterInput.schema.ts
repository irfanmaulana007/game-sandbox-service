import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogScalarWhereInputObjectSchema } from './BattleLogScalarWhereInput.schema';
import { BattleLogUpdateManyMutationInputObjectSchema } from './BattleLogUpdateManyMutationInput.schema';
import { BattleLogUncheckedUpdateManyWithoutCharacterInputObjectSchema } from './BattleLogUncheckedUpdateManyWithoutCharacterInput.schema'

export const BattleLogUpdateManyWithWhereWithoutCharacterInputObjectSchema: z.ZodType<Prisma.BattleLogUpdateManyWithWhereWithoutCharacterInput, Prisma.BattleLogUpdateManyWithWhereWithoutCharacterInput> = z.object({
  where: z.lazy(() => BattleLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BattleLogUpdateManyMutationInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateManyWithoutCharacterInputObjectSchema)])
}).strict();
export const BattleLogUpdateManyWithWhereWithoutCharacterInputObjectZodSchema = z.object({
  where: z.lazy(() => BattleLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => BattleLogUpdateManyMutationInputObjectSchema), z.lazy(() => BattleLogUncheckedUpdateManyWithoutCharacterInputObjectSchema)])
}).strict();
