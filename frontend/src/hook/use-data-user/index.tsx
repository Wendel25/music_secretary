import { useEffect } from "react";
import { TokenDecode } from "@/utils/token";
import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useDataUserStore } from "@/store/data-user";
import { updatePassword } from "@/hook/use-data-user/fetch-data-user-api";

export function useDataUser() {
  const dataUser = TokenDecode();
  const { showError } = useToast();
  const { setData, data } = useDataUserStore();

  const { mutate, isPending } = useMutation({
    mutationFn: updatePassword,
    onSuccess: (data) =>  setData(data),
    onError: () => showError("Ocorreu um erro ao buscar usuário"),
  });

  const refresh = () => {
    if (dataUser?.email) {
      mutate(dataUser.email);
    }
  };

  useEffect(() => {
    if (!data && !isPending && dataUser?.email) {
      mutate(dataUser.email);
    }
  }, [data, isPending, mutate, dataUser?.email]);

  return { data, refresh };
}
