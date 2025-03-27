import { getDataFromAPI } from "@/utils/get-data-api/get-data-from-api";

export function getDataMusicianAPI() {
    const { mutate, isPending, data } = getDataFromAPI();
    return { mutate, isPending, data };
}