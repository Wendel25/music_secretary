import { Route } from "react-router-dom";
import { ProtectedRoute } from "@/middleware";

import { HomeView } from "@/view/authenticated/home";
import MusicianPage from "@/pages/authenticated/musician";
import OrganistPage from "@/pages/authenticated/organist";

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
      <Route
        path="/musicians"
        element={
          <ProtectedRoute>
            <MusicianPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/organists"
        element={
          <ProtectedRoute>
            <OrganistPage />
          </ProtectedRoute>
        }
      />
    </>
  );
};
