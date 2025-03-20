import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SelectFilters() {
  return (
    <div className="flex items-center gap-2 w-full">
      <Select defaultValue="todos" >
        <SelectTrigger>
          <SelectValue placeholder="Filtrar por cargos" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">Todos os cargos</SelectItem>
          <SelectItem value="ativo">Ativos</SelectItem>
          <SelectItem value="pendente">Pendentes</SelectItem>
          <SelectItem value="concluido">Concluídos</SelectItem>
          <SelectItem value="cancelado">Cancelados</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
