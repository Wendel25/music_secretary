import { useForm } from "react-hook-form";
import { useToast } from "@/hook/use-toast";
import { useDataUser } from "@/hook/use-data-user";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePasswordSchema, UpdatePasswordSchemaType } from "@/schema/update-password";
import { updatePassword } from "@/view/authenticated/home/update-password/update-password";

export function useUpdatePasswordForm() {
  const { refresh } = useDataUser();
  const { showSuccess, showError } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordSchemaType>({
    resolver: zodResolver(updatePasswordSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      refresh();
      showSuccess(
        "A alteração da senha foi realizada com sucesso. A partir de agora, utilize a nova senha para acessar sua conta."
      );
    },
    onError: (error) => showError(error.message || "Ocorreu um erro ao mudar a senha"),
  });

  return {
    register,
    handleSubmit,
    errors,
    isPending,
    onSubmit: (data: UpdatePasswordSchemaType) => mutate(data),
  };
}
