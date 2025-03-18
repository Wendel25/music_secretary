import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function SidebarItem({ icon: Icon, label, isActive, onClick }: SidebarItemProps) {
  const optionsActive = isActive ? "text-[#0097b2]" : "";
  const optionLogout = label === "Sair" ? "text-red-500" : "";

  return (
    <SidebarMenuItem>
      <SidebarMenuButton className={optionsActive}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onClick) onClick();
          }}
          className={`flex items-center w-full ${optionsActive}`}
        >
          <Icon className={`mr-2 h-5 w-5 ${optionsActive} ${optionLogout}`} />
          <span className={`${optionsActive} ${optionLogout}`}>
            {label}
          </span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
