import { useEffect } from "react";
import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useDashboardStore } from "@/store/dashboard";
import { fetchDataApiGet } from "@/utils/fetch-data-api-get";
import { DataDashboardReceived } from "@/interfaces/dashboard";
import { validationUser } from "@/utils/validation-user-for-api";

export function useDataFromApiDashboard() {
  const { showError } = useToast();
  const { data, setData } = useDashboardStore();
  const route = validationUser("dashboard");

  const { mutate, isPending } = useMutation({
    mutationFn: (route: string) => fetchDataApiGet<DataDashboardReceived>(route),
    onSuccess: (data) => setData(data),
    onError: (error) => showError(error.message || "Ocorreu um erro ao buscar informações"),
  });

  useEffect(() => {
    if (!data) mutate(route);
  }, [data]);

  return { isPending };
}
