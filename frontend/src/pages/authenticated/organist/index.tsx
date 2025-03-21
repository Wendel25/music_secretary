import { Helmet } from "react-helmet";
import { OrganistView } from "@/view/authenticated/organist";

export default function OrganistPage() {
  return (
    <>
      <Helmet>
        <title>Organistas | CCB</title>
      </Helmet>

      <OrganistView />
    </>
  );
}
