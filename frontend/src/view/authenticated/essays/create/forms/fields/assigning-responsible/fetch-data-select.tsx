import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { fetchDataApiForSelect } from "./data-api";
import { useEffect, useMemo } from "react";

export function useDataForSelect() {
  const { showError } = useToast();

  const { mutate, data } = useMutation({
    mutationFn: fetchDataApiForSelect,
    onError: () => showError("Ocorreu um erro ao buscar os dados"),
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData };
}
