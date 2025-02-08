import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "@/routers/public-routes";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
};
