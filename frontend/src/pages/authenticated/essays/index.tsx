import { Helmet } from "react-helmet";
import EssaysPreviw from "@/view/authenticated/essays";

export default function EssaysPage() {
  return (
    <>
      <Helmet>
        <title>Ensaios | CCB</title>
      </Helmet>

      <EssaysPreviw />
    </>
  );
}
