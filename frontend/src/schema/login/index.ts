import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string().email('Insira um email válido').min(1, 'O email é obrigatório'),
    password: z.string().min(6, 'A senha deve ter pelo menos 8 caracteres').min(1, 'A senha é obrigatória'),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;  