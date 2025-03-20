import { useEffect } from "react";
import { TokenDecode } from "@/utils/token";
import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useListUsersStore } from "@/store/list-users";
import { fetchDataTable } from "@/view/authenticated/home/table-musician/fetch-data-api";

export function useDataUsersForTable() {
  const dataUser = TokenDecode();
  const { showError } = useToast();
  const { setData, data } = useListUsersStore();

  const { mutate, isPending } = useMutation({
    mutationFn: fetchDataTable,
    onSuccess: (data) => setData(data),
    onError: () => showError("Ocorreu um erro ao buscar lista de usuários"),
  });

  useEffect(() => {
    if (!data && !isPending && dataUser?.email) {
      mutate();
    }
  }, [data, isPending, mutate, dataUser?.email]);

  return { data, refresh: mutate };
}
