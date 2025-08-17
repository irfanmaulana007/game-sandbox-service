import { z } from 'zod';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string(),
    passwordHash: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    characters: z.array(z.unknown())
}).strict();

export type UserModelType = z.infer<typeof UserModelSchema>;
