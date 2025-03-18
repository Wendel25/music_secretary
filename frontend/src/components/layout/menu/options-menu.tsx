import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { SidebarItem } from "./sidebar-options-items";
import { LayoutDashboard, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar";
import { menuItems } from "./menu-items";
import { LogoutUser } from "@/utils/logout";

export function OptionsMenu() {
  const location = useLocation();

  const activeItem = useMemo(() => {
    return menuItems.find((item) => location.pathname.includes(item.route))?.route || "";
  }, [location]);

  return (
    <Sidebar collapsible="none" className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#0097b2] font-semibold">HOME</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarItem icon={LayoutDashboard} label="Dashboard" isActive={activeItem === "home"} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#0097b2] font-semibold">GERENCIAMENTO</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems
                .filter(({ label }) => label !== "Dashboard")
                .filter(({ label }) => label !== "Sair")
                .map(({ label, icon, route }) => (
                  <SidebarItem key={route} icon={icon} label={label} isActive={activeItem === route} />
                ))}

              <SidebarItem icon={LogOut} label="Sair" isActive={activeItem === "logout"} onClick={LogoutUser} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
