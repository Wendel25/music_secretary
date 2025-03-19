import { Helmet } from "react-helmet";
import { SupportView } from "@/view/unauthenticated/support";

export default function SupportPage() {
  return (
    <>
      <Helmet>
        <title>Suporte | CCB</title>
      </Helmet>

      <SupportView />
    </>
  );
}
