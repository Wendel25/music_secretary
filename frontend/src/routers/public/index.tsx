import { Route, Navigate } from "react-router-dom";

import LoginPage from "@/pages/unauthenticated/login";

export const PublicRoutes = () => {
  return (
    <>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/login" element={<LoginPage />} />
    </>
  );
};
