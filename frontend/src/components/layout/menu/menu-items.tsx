import { CalendarClock, LayoutDashboard, LogOut } from "lucide-react";

export const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, route: "/home" },
  { label: "Músicos", icon: "/musico.png", route: "/musicians" },
  { label: "Organistas", icon: "/organista.png", route: "/organists" },
  { label: "Ensaios", icon: CalendarClock, route: "/essays" },
  { label: "Rodízio", icon: "/rodizio.png", route: "/rotation" },
  { label: "Sair", icon: LogOut, route: "logout", isLogout: true },
];
