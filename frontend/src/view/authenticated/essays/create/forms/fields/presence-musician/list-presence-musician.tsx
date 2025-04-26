import { useToast } from "@/hook/use-toast";
import { RegistersInterface } from "@/interfaces/registers";
import { fetchDataApiGet } from "@/utils/fetch-data-api-get";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useMemo } from "react";

export function useListPresenceMusician() {
  const { showError } = useToast();

  const { mutate, data } = useMutation({
    mutationFn: async () => fetchDataApiGet<RegistersInterface[]>("musician-and-organists"),
    onError: () => showError("Ocorreu um erro ao buscar os dados"),
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData };
}
