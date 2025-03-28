import { useEffect } from "react";
import { TokenDecode } from "@/utils/token";
import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useListUsersStore } from "@/store/list-users";
import { DataUserInterface } from "@/interfaces/data-user";
import { fetchDataApiGet } from "@/utils/fetch-data-api-get";
import { validationUser } from "@/utils/validation-user-for-api";

export function useDataUsersForTable() {
  const dataUser = TokenDecode();
  const { showError } = useToast();
  const { setData, data } = useListUsersStore();

  const route = validationUser("user");

  const { mutate, isPending } = useMutation({
    mutationFn: (route: string) => fetchDataApiGet<DataUserInterface[]>(route),
    onSuccess: (data) => setData(data),
    onError: () => showError("Ocorreu um erro ao buscar lista de usuários"),
  });

  const refresh = () => {
    if (!data && !isPending) {
      mutate(route);
    }
  };

  useEffect(() => {
    if (!data && !isPending && dataUser?.email) {
      mutate(route);
    }
  }, [data, isPending, dataUser?.email]);

  return { data, refresh };
}
