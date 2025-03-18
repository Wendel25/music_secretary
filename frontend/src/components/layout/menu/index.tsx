import { useState, useCallback } from "react";
import { OptionsMenu } from "./desktop/options-menu";
import useDeviceType from "@/hook/use-device-type";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarHeader } from "./sidebar-header";

interface SidebarMenuProps {
  titlePage: string;
  children: React.ReactNode;
}

export default function SidebarMenu({ children, titlePage }: SidebarMenuProps) {
  const [isOpen, setIsOpen] = useState(true);

  const viewType = useDeviceType();

  const toggleSidebar = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <SidebarHeader toggleSidebar={toggleSidebar} viewType={viewType} />

      <div className="flex flex-1">
        {viewType === "desktop" && (
          <div className={`transition-all duration-300 ${isOpen ? "w-64" : "w-0"} overflow-hidden`}>
            {isOpen && <OptionsMenu />}
          </div>
        )}

        <div className="flex-1 p-5 transition-all duration-300">
          <Card className="w-full">
            <CardContent>
              <CardHeader>
                <CardTitle className="text-2xl">{titlePage}</CardTitle>
              </CardHeader>
              {children}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
