import { useEffect } from "react";
import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useDashboardStore } from "@/store/dashboard";
import { fetchDataDashboard } from "@/view/authenticated/home/fetch-data-api";

export function useDataFromApiDashboard() {
  const { showError } = useToast();
  const { data, setData } = useDashboardStore();

  const { mutate, isPending } = useMutation({
    mutationFn: fetchDataDashboard,
    onSuccess: (data) => setData(data),
    onError: (error) => showError(error.message || "Ocorreu um erro ao buscar informações"),
  });

  useEffect(() => {
    if (!data) mutate();
  }, [data]);

  return { isPending };
}
