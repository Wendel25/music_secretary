import { SelectFilters } from "@/view/authenticated/home/table-musician/header-table/select-filters";
import { SearchUserTable } from "@/view/authenticated/home/table-musician/header-table/input-search";

export function HeaderTableUsers() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mb-4 justify-between w-full">
      <div className="w-full md:w-[50%] lg:w-[30%]">
        <SearchUserTable />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-[50%] lg:w-[25%]">
        <SelectFilters />
      </div>
    </div>
  );
}
