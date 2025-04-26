import { useToast } from "@/hook/use-toast";
import { OptionsMinistryProfileInterface } from "@/interfaces/registers";
import { fetchDataApiGet } from "@/utils/fetch-data-api-get";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

export function useDataForSelect() {
  const { showError } = useToast();

  const { mutate, data } = useMutation({
    mutationFn: async () => fetchDataApiGet<OptionsMinistryProfileInterface[]>("essays/present-ministry"),
    onError: () => showError("Ocorreu um erro ao buscar os dados"),
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData };
}
