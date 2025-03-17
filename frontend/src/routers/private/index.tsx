import { Route } from "react-router-dom";
import { ProtectedRoute } from "@/middleware";

import { HomeView } from "@/view/authenticated/home";

export const PrivateRoutes = () => {
  return (
    <>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <HomeView />
          </ProtectedRoute>
        }
      />
    </>
  );
};
