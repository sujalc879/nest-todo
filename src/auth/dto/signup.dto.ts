import { string, z } from 'zod'

export const signupSchema = z.object({
    username: string().max(100).min(3),
    password: string().max(200).min(3)

});

export type SignupDto = z.infer<typeof signupSchema>;``