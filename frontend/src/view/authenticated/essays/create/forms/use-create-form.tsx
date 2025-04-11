import { useToast } from "@/hook/use-toast";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "@/schema/registers";
import { fetchDataRegister } from "@/components/layout/register-new-musician/fetch-data-api";

export interface RegisterCreateProps {
  closed: () => void;
}

export function useCreateForm({ closed }: RegisterCreateProps) {
  const { showSuccess, showError } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: fetchDataRegister,
    onSuccess: () => {
      showSuccess("Registro criado com sucesso.");
      closed();
    },
    onError: (error) => showError(error.message || "Ocorreu um erro criar registro"),
  });

  return {
    register,
    handleSubmit,
    errors,
    isPending,
    setValue,
    onSubmit: (data: RegisterSchemaType) => mutate(data),
  };
}
