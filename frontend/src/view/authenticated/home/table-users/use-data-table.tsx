import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useListUsersStore } from "@/store/list-users";
import { DataUserInterface } from "@/interfaces/data-user";
import { fetchDataApiGet } from "@/utils/fetch-data-api-get";
import { validationUser } from "@/utils/validation-user-for-api";

export function useDataUsers() {
  const { showError } = useToast();
  const { setData, data } = useListUsersStore();

  const routeAPI = validationUser("user");

  const { mutate, isPending } = useMutation({
    mutationFn: (route: string) => fetchDataApiGet<DataUserInterface[]>(route),
    onSuccess: (data) => setData(data),
    onError: () => showError("Ocorreu um erro ao buscar lista de usuários"),
  });

  const refresh = () => {
    if (!isPending) {
      mutate(routeAPI);
    }
  };

  return { data, refresh };
}
