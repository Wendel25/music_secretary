import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { OrganistView } from "@/view/authenticated/organist";
import { getDataFromAPI } from "@/utils/get-data-api/get-data-from-api";

export default function OrganistPage() {
  const { mutate } = getDataFromAPI();

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
