import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/store/search-user-table";

export function SearchUserTable() {
 const { searchQuery, setSearchQuery } = useUserStore();

  return (
    <div className="relative w-full md:w-[40%]">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Buscar"
        className="pl-8"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
