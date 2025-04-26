import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function ButtonPresent() {
  return (
    <Button variant="ghost" size="icon" className="hover:bg-green-50">
      <Check color="green" />
    </Button>
  );
}