import { Helmet } from "react-helmet";
import { HomeView } from "@/view/authenticated/home";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Inicio | CCB</title>
      </Helmet>

      <HomeView />
    </>
  );
}
