"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function DateComponent() {
  const today = new Date();
  const [date, setDate] = React.useState<Date | undefined>(today);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start" portalled={false} onPointerDown={(e) => e.stopPropagation()}>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            console.log("clicou", selectedDate);
            if (selectedDate) setDate(selectedDate);
          }}
          initialFocus
          locale={ptBR}
          disabled={{ after: today }}
        />
      </PopoverContent>
    </Popover>
  );
}
