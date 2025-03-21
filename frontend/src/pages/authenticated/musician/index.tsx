import { Helmet } from "react-helmet";
import { MusicianView } from "@/view/authenticated/musician";

export default function MusicianPage() {
  return (
    <>
      <Helmet>
        <title>Músicos | CCB</title>
      </Helmet>

      <MusicianView />
    </>
  );
}
