import { LayoutDashboard, Music, Mic, CalendarClock, RotateCcw, LogOut } from "lucide-react";

export const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, route: "home" },
  { label: "Músicos", icon: Music, route: "musicians" },
  { label: "Organistas", icon: Mic, route: "organists" },
  { label: "Ensaios", icon: CalendarClock, route: "essays" },
  { label: "Rodízio", icon: RotateCcw, route: "rotation" },
  { label: "Sair", icon: LogOut, route: "logout", isLogout: true },
];
