import { useEffect, useState } from "react";
import { useToast } from "@/hook/use-toast";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { ChurchInterface } from "@/interfaces/churches";
import { fetchDataChurches } from "./data-churches-api";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectChurchesProps {
  onSelectCity: (cityId: string) => void;
}

export function SelectChurches({ onSelectCity }: SelectChurchesProps) {
  const [data, setData] = useState<ChurchInterface[] | undefined>([]);
  const { showError } = useToast();

  const { mutate } = useMutation({
    mutationFn: fetchDataChurches,
    onSuccess: (data) => {
      const sortedData = data?.sort((a, b) => a.city.name.localeCompare(b.city.name));
      setData(sortedData);
    },
    onError: () => showError("Ocorreu um erro ao buscar as igrejas"),
  });

  useEffect(() => {
    mutate();
  }, []);

  const handleSelectChange = (churchId: string) => {
    const selectedChurch = data?.find((item) => item.id === churchId);
    if (selectedChurch) {
      onSelectCity(selectedChurch.city.id);
    }
  };

  return (
    <>
      <Label htmlFor="id_church" className="font-medium">
        Casa de Oração
      </Label>
      <Select onValueChange={handleSelectChange}>
        <SelectTrigger>
          <SelectValue placeholder="Selecione uma opção" />
        </SelectTrigger>
        <SelectContent>
          {data &&
            data.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.name} - {item.city.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </>
  );
}
