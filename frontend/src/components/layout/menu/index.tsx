import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { OptionsMenu } from "./options-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SidebarMenuProps {
  titlePage: string;
  children: React.ReactNode;
}

export default function SidebarMenu({ children, titlePage }: SidebarMenuProps) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="w-full bg-white p-3 flex items-center justify-between z-50 border">
        <div className="flex items-center gap-8">
          <a href="/home">
            <img src="/logo-text.jpeg" alt="image-logo" width={300} height={80} />
          </a>
          <button onClick={toggleSidebar} className="text-gray-700">
            <AlignJustify size={26} />
          </button>
        </div>
      </div>

      <div className="flex flex-1">
        <div className={`transition-all duration-300 ${isOpen ? "w-64" : "w-0"} overflow-hidden`}>
          {isOpen && <OptionsMenu />}
        </div>
        <div className="flex-1 p-5 transition-all duration-300">
          <Card className="w-full">
            <CardContent>
              <CardHeader>
                <CardTitle className="text-2xl">{titlePage}</CardTitle>
                <CardDescription />
              </CardHeader>
              {children}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
