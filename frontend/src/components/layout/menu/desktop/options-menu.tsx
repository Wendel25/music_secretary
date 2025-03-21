import { useMemo } from "react";
import { LogoutUser } from "@/utils/logout";
import { useLocation } from "react-router-dom";
import { ChartNoAxesColumn, LogOut } from "lucide-react";
import { menuItems } from "@/components/layout/menu/menu-items";
import { SidebarItem } from "@/components/layout/menu/desktop/sidebar-options-items";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar";

export function OptionsMenu() {
  const location = useLocation();

  const activeItem = useMemo(() => {
    return menuItems.find((item) => location.pathname.includes(item.route))?.route || "";
  }, [location]);

  return (
    <Sidebar collapsible="none" className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-color_logo font-semibold">HOME</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarItem
                icon={ChartNoAxesColumn}
                label="Dashboard"
                isActive={activeItem === "home"}
                route="/dashboard"
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-color_logo font-semibold">GERENCIAMENTO</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems
                .filter(({ label }) => label !== "Dashboard")
                .filter(({ label }) => label !== "Sair")
                .map(({ label, icon, route }) => (
                  <SidebarItem key={route} icon={icon} label={label} isActive={activeItem === route} route={route} />
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
