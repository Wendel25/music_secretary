import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { MusicianView } from "@/view/authenticated/musician";
import { getDataFromAPI } from "@/utils/populate-table-musician/get-data-from-api";

export default function MusicianPage() {
  const { mutate } = getDataFromAPI();

  useEffect(() => {
    mutate("musician");
  }, []);

  return (
    <>
      <Helmet>
        <title>Músicos | CCB</title>
      </Helmet>

      <MusicianView />
    </>
  );
}
