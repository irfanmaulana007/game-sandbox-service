import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BattleLogCreateWithoutCharacterInputObjectSchema } from './BattleLogCreateWithoutCharacterInput.schema';
import { BattleLogUncheckedCreateWithoutCharacterInputObjectSchema } from './BattleLogUncheckedCreateWithoutCharacterInput.schema';
import { BattleLogCreateOrConnectWithoutCharacterInputObjectSchema } from './BattleLogCreateOrConnectWithoutCharacterInput.schema';
import { BattleLogCreateManyCharacterInputEnvelopeObjectSchema } from './BattleLogCreateManyCharacterInputEnvelope.schema';
import { BattleLogWhereUniqueInputObjectSchema } from './BattleLogWhereUniqueInput.schema'

export const BattleLogUncheckedCreateNestedManyWithoutCharacterInputObjectSchema: z.ZodType<Prisma.BattleLogUncheckedCreateNestedManyWithoutCharacterInput, Prisma.BattleLogUncheckedCreateNestedManyWithoutCharacterInput> = z.object({
  create: z.union([z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BattleLogCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BattleLogCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const BattleLogUncheckedCreateNestedManyWithoutCharacterInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogCreateWithoutCharacterInputObjectSchema).array(), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogUncheckedCreateWithoutCharacterInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => BattleLogCreateOrConnectWithoutCharacterInputObjectSchema), z.lazy(() => BattleLogCreateOrConnectWithoutCharacterInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => BattleLogCreateManyCharacterInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => BattleLogWhereUniqueInputObjectSchema), z.lazy(() => BattleLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
