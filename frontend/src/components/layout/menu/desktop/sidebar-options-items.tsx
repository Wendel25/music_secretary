import { createElement } from "react";
import { Link } from "react-router-dom";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

interface SidebarItemProps {
  icon: React.ElementType | string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  route?: string;
}

export function SidebarItem({ icon, label, isActive, onClick, route }: SidebarItemProps) {
  const optionsActive = isActive ? "text-color_logo" : "";
  const optionLogout = label === "Sair" ? "text-red-500" : "";

  return (
    <SidebarMenuItem>
      <SidebarMenuButton className={optionsActive}>
        <Link to={route || "#"} onClick={onClick} className={`flex items-center w-full ${optionsActive}`}>
          {typeof icon === "string" ? (
            <img src={icon} alt={label} className={`mr-2 h-5 w-5 ${optionsActive} ${optionLogout}`} />
          ) : (
            createElement(icon, { className: `mr-2 h-5 w-5 ${optionsActive} ${optionLogout}` })
          )}
          <span className={`${optionsActive} ${optionLogout}`}>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
