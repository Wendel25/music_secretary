import { useState, useEffect, useMemo } from "react";
import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { fetchDataApiForSelect } from "@/components/layout/selects/select-options/data-api";

interface UseSelectDataProps<T> {
  route: string;
  getItemLabel: (item: T) => string;
}

export function useSelectData<T>({ route, getItemLabel }: UseSelectDataProps<T>) {
  const [data, setData] = useState<T[]>([]);
  const { showError } = useToast();

  const { mutate } = useMutation<T[], Error, string>({
    mutationFn: fetchDataApiForSelect<T>,
    onSuccess: (fetchedData) => {
      const sortedData = [...fetchedData].sort((a, b) => getItemLabel(a).localeCompare(getItemLabel(b)));
      setData(sortedData);
    },
    onError: () => showError("Ocorreu um erro ao buscar os dados"),
  });

  useEffect(() => {
    mutate(route);
  }, [route, mutate]);

  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData, mutate };
}
