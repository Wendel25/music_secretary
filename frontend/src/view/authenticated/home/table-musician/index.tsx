import { useDataUsersForTable } from "@/view/authenticated/home/table-musician/use-data-table";

export function TableMusicianAndOrganist() {
    const { data } = useDataUsersForTable();

    console.log(data);
    
    return (
        <div className="">
            <p>Aqui vai a tabela</p>
        </div>
    )
}