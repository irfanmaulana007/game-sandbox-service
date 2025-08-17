import { z } from 'zod';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string(),
    passwordHash: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    characters: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
