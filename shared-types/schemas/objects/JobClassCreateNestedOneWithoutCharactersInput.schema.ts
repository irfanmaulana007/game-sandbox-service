import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassCreateWithoutCharactersInputObjectSchema } from './JobClassCreateWithoutCharactersInput.schema';
import { JobClassUncheckedCreateWithoutCharactersInputObjectSchema } from './JobClassUncheckedCreateWithoutCharactersInput.schema';
import { JobClassCreateOrConnectWithoutCharactersInputObjectSchema } from './JobClassCreateOrConnectWithoutCharactersInput.schema';
import { JobClassWhereUniqueInputObjectSchema } from './JobClassWhereUniqueInput.schema'

export const JobClassCreateNestedOneWithoutCharactersInputObjectSchema: z.ZodType<Prisma.JobClassCreateNestedOneWithoutCharactersInput, Prisma.JobClassCreateNestedOneWithoutCharactersInput> = z.object({
  create: z.union([z.lazy(() => JobClassCreateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobClassCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => JobClassWhereUniqueInputObjectSchema).optional()
}).strict();
export const JobClassCreateNestedOneWithoutCharactersInputObjectZodSchema = z.object({
  create: z.union([z.lazy(() => JobClassCreateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedCreateWithoutCharactersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => JobClassCreateOrConnectWithoutCharactersInputObjectSchema).optional(),
  connect: z.lazy(() => JobClassWhereUniqueInputObjectSchema).optional()
}).strict();
