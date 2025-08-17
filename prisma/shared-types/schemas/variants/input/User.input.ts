import { z } from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    username: z.string(),
    email: z.string(),
    passwordHash: z.string(),
    characters: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
