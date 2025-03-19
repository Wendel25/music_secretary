import { AlignJustify } from "lucide-react";
import { MenuMobile } from "@/components/layout/menu/mobile";
import { ShortcutMessages } from "@/components/layout/menu/shortcut-messages";

interface TopMenuProps {
  viewType: "desktop" | "mobile" | "tablet";
  toggleSidebar: () => void;
}

export function SidebarHeader({ viewType, toggleSidebar }: TopMenuProps) {
  return (
    <div className="w-full bg-white p-3 flex items-center justify-between z-50 border">
      <div className="flex items-center gap-8">
        <a href="/home">
          <img src="/logo-text.jpeg" alt="logo" width={300} height={80} />
        </a>

        {viewType === "desktop" ? (
          <button onClick={toggleSidebar} className="text-gray-700">
            <AlignJustify size={26} />
          </button>
        ) : (
          <MenuMobile />
        )}
      </div>

      {viewType === "desktop" && <ShortcutMessages />}
    </div>
  );
}
