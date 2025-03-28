import { useEffect } from "react";
import { TokenDecode } from "@/utils/token";
import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useDataUserStore } from "@/store/data-user";
import { DataUserInterface } from "@/interfaces/data-user";
import { fetchDataApiGet } from "@/utils/fetch-data-api-get";

export function useDataUser() {
  const dataUser = TokenDecode();
  const { showError } = useToast();
  const { setData, data } = useDataUserStore();

  const router = `user/find-unique?email=${dataUser?.email}`;

  const { mutate } = useMutation({
    mutationFn: (route: string) => fetchDataApiGet<DataUserInterface>(route),
    onSuccess: (data) => setData(data),
    onError: () => showError("Ocorreu um erro ao buscar usuário"),
  });

  const refresh = () => {
    if (dataUser?.email) {
      mutate(router);
    }
  };

  useEffect(() => {
    if (!data) mutate(router);
  }, []);

  return { data, refresh };
}
