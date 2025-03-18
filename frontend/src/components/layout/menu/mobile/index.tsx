import { AlignJustify } from "lucide-react";
import { OptionsMenu } from "@/components/layout/menu/desktop/options-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify size={26} className="text-gray-700" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="mt-5">
            <img src="/logo-text.jpeg" alt="logo" width={230} height={80} />
          </SheetTitle>
          <SheetDescription />
          <OptionsMenu />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
