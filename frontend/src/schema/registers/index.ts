import { z } from 'zod';

export const RegisterSchema = z.object({
    name: z.string().min(1, 'O nome é obrigatório'),
    phone: z.string().optional().transform((val) => val?.replace(/\D/g, '')),
    id_church: z.string({ required_error: "A casa de oração é obrigatória" }),
    id_ministry: z.string({ required_error: 'O nível é obrigatório' }),
    id_instrument: z.string({ required_error: 'O instrumento é obrigatório' } ),
    id_status: z.string({ required_error: 'O status é obrigatório' } ),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;  