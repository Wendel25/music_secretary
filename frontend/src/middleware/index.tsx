import { useEffect, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { LogoutUser } from "@/utils/logout";
import { getCookies } from "@/utils/cookies";
import { validationToken } from "@/middleware/validation-token";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = getCookies("ITU");

  const isAuthenticated = () => {
    if (!token) {
      LogoutUser();
      return false;
    }

    return validationToken(token);
  };

  useEffect(() => {
    isAuthenticated();
  }, [token]);

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}
