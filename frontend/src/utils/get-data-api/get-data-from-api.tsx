import { useToast } from "@/hook/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useRegistersStore } from "@/store/registers";
import { fetchDataTable } from "@/utils/get-data-api/fetch-data-api";

export function getDataFromAPI() {
  const { showError } = useToast();
  const { musicianData, organistData, setMusicianData, setOrganistData } = useRegistersStore();

  const { mutate, isPending } = useMutation({
    mutationFn: (route: string) => fetchDataTable(route),
    onSuccess: (data, variables) => {
      if (variables === "musician") {
        setMusicianData(data);
      } else if (variables === "organists") {
        setOrganistData(data);
      }
    },
    onError: (error) => showError(error.message || "Ocorreu um erro ao buscar informações"),
  });

  const getData = (route: string) => {
    if (route === "musician") return musicianData;
    if (route === "organists") return organistData;
    return [];
  };

  return { mutate, isPending, getData };
}
