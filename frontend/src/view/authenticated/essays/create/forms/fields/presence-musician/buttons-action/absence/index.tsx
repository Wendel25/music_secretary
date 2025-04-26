import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonAbsence() {
  return (
    <Button variant="ghost" size="icon" className="hover:bg-red-50">
      <X color="red" />
    </Button>
  );
}
