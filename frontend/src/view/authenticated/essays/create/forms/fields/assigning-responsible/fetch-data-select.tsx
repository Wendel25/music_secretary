import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";
import { fetchDataApiGet } from "@/utils/fetch-data-api-get";
import { RegistersInterface } from "@/interfaces/registers";

export function useDataForSelect() {
  const { showError } = useToast();

  const { mutate, data } = useMutation({
    mutationFn: async () => fetchDataApiGet<RegistersInterface[]>("essays/responsives-essays"),
    onError: () => showError("Ocorreu um erro ao buscar os dados"),
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData };
}
