import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobClassWhereUniqueInputObjectSchema } from './JobClassWhereUniqueInput.schema';
import { JobClassCreateWithoutCharactersInputObjectSchema } from './JobClassCreateWithoutCharactersInput.schema';
import { JobClassUncheckedCreateWithoutCharactersInputObjectSchema } from './JobClassUncheckedCreateWithoutCharactersInput.schema'

export const JobClassCreateOrConnectWithoutCharactersInputObjectSchema: z.ZodType<Prisma.JobClassCreateOrConnectWithoutCharactersInput, Prisma.JobClassCreateOrConnectWithoutCharactersInput> = z.object({
  where: z.lazy(() => JobClassWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => JobClassCreateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedCreateWithoutCharactersInputObjectSchema)])
}).strict();
export const JobClassCreateOrConnectWithoutCharactersInputObjectZodSchema = z.object({
  where: z.lazy(() => JobClassWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => JobClassCreateWithoutCharactersInputObjectSchema), z.lazy(() => JobClassUncheckedCreateWithoutCharactersInputObjectSchema)])
}).strict();
