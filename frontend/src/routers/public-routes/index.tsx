import { Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "@/pages/unauthenticated/login";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
