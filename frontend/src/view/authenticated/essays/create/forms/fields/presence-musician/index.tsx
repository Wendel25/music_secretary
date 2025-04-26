import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useListPresenceMusician } from "./list-presence-musician";
import { ButtonPresent } from "./buttons-action/present";
import { ButtonAbsence } from "./buttons-action/absence";

export function ListPresenceMusician() {
  const { data } = useListPresenceMusician();

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="list-presence" className="font-medium">
        Lista de Presença
      </Label>

      <ScrollArea className="h-[350px] rounded-md border p-4">
        <div className="grid">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left">Músico</TableHead>
                <TableHead>Instrumento</TableHead>
                <TableHead>Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="text-left">{item.name}</TableCell>
                  <TableCell>{item.id_instrument.value}</TableCell>
                  <TableCell className="flex gap-1 justify-center">
                    <ButtonPresent />
                    <ButtonAbsence />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ScrollArea>
    </div>
  );
}
