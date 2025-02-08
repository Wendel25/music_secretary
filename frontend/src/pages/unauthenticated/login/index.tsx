import { Helmet } from "react-helmet";
import { ViewLogin } from "@/view/unauthenticated/login";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Entrar | Regional Telhas</title>
      </Helmet>

      <ViewLogin />
    </>
  );
}
