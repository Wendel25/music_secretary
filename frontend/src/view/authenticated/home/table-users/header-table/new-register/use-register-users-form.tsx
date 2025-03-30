import { useToast } from "@/hook/use-toast";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { fetchDataRegisterUser } from "./fetch-data-api";
import { RegisterUsersSchema, RegisterUsersSchemaType } from "@/schema/users";
import { useDataUsers } from "@/view/authenticated/home/table-users/use-data-table";
import { RegisterFormsProps } from "@/components/layout/register-new-musician/use-register-form";

export function useRegisterUsersForm({ closed }: RegisterFormsProps) {
  const { refresh } = useDataUsers();
  const { showSuccess, showError } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegisterUsersSchemaType>({
    resolver: zodResolver(RegisterUsersSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: fetchDataRegisterUser,
    onSuccess: () => {
      refresh();
      showSuccess("Usuário criado com sucesso.");
      closed();
    },
    onError: (error) => showError(error.message || "Ocorreu um erro criar usuário"),
  });

  return {
    register,
    handleSubmit,
    errors,
    isPending,
    setValue,
    onSubmit: (data: RegisterUsersSchemaType) => mutate(data),
  };
}
