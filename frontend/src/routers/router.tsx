import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "@/routers/public";
import { PrivateRoutes } from "@/routers/private";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes()}
        {PrivateRoutes()}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
