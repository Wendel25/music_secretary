import { z } from "zod";

export const updatePasswordSchema = z.object({
    password: z.string()
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
        .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
        .regex(/[0-9]/, "A senha deve conter pelo menos um número")
        .regex(/[\W_]/, "A senha deve conter pelo menos um caractere especial"),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});

export type UpdatePasswordSchemaType = z.infer<typeof updatePasswordSchema>;  
