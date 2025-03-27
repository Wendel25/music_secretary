import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { MusicianView } from "@/view/authenticated/musician";
import { getDataMusicianAPI } from "@/view/authenticated/musician/get-data-api-musician";

export default function MusicianPage() {
  const { mutate } = getDataMusicianAPI();

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
