import { z } from 'zod';

export const RegisterUsersSchema = z.object({
    name: z.string().min(1, 'O nome é obrigatório'),
    email: z.string().email('Insira um email válido').min(1, 'O email é obrigatório'),
    phone: z.string().optional().transform((val) => val?.replace(/\D/g, '')),
    id_church: z.string({ required_error: "A casa de oração é obrigatória" }),
    id_ministry: z.string({ required_error: 'O nível é obrigatório' }),
});

export type RegisterUsersSchemaType = z.infer<typeof RegisterUsersSchema>;  