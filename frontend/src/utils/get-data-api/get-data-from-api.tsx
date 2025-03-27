import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useRegistersStore } from "@/store/registers";
import { fetchDataTable } from "@/utils/get-data-api/fetch-data-api";

export function getDataFromAPI() {
  const { showError } = useToast();
  const { data, setData } = useRegistersStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (route: string) => fetchDataTable(route),
    onSuccess: (data) => setData(data),
    onError: (error) => showError(error.message || "Ocorreu um erro ao buscar informações"),
  });

  return { data, isPending, mutate };
}
