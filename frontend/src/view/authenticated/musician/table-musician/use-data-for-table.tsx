import { useEffect } from "react";
import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useRegistersStore } from "@/store/registers";
import { fetchDataTableMusician } from "@/view/authenticated/musician/table-musician/fetch-data-api";

export function UseDataForTableMusician() {
  const { showError } = useToast();
  const { data, setData } = useRegistersStore();

  const { mutate, isPending } = useMutation({
    mutationFn: fetchDataTableMusician,
    onSuccess: (data) => setData(data),
    onError: (error) => showError(error.message || "Ocorreu um erro ao buscar informações"),
  });

  useEffect(() => {
    if (!data) mutate();
  }, [data]);

  return { isPending, mutate };
}
