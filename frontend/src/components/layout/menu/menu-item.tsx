interface MenuItemProps {
  icon: React.ReactNode;
  text: string;
  isCollapsed: boolean;
  href: string;
}

export function MenuItem({ icon, text, isCollapsed, href }: MenuItemProps) {
  return (
    <a href={href} className="flex items-center px-4 py-3 text-white hover:bg-indigo-700 transition-colors">
      <span className="mr-4">{icon}</span>
      {!isCollapsed && <span>{text}</span>}
    </a>
  );
}
