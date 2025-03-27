import { Helmet } from "react-helmet";
import { OrganistView } from "@/view/authenticated/organist";
import { getDataMusicianAPI } from "@/view/authenticated/musician/get-data-api-musician";
import { useEffect } from "react";

export default function OrganistPage() {
  const { mutate } = getDataMusicianAPI();

  useEffect(() => {
    mutate("organists");
  }, []);

  return (
    <>
      <Helmet>
        <title>Organistas | CCB</title>
      </Helmet>

      <OrganistView />
    </>
  );
}
