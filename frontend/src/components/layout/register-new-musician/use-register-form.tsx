import { useToast } from "@/hook/use-toast";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { getDataFromAPI } from "@/utils/populate-table-musician/get-data-from-api";
import { RegisterSchema, RegisterSchemaType } from "@/schema/registers";
import { fetchDataRegister } from "@/components/layout/register-new-musician/fetch-data-api";

export interface RegisterFormsProps {
  closed: () => void;
  route?: string;
}

export function useRegisterForm({ closed, route }: RegisterFormsProps) {
  const { mutate: refreshData } = getDataFromAPI();
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
      refreshData(route || "");
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
