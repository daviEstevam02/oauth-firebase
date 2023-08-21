import { useUser } from "../hooks/useUser";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { isAuthenticated } = useUser();
  return isAuthenticated ? (<AppRoutes />) : (<AuthRoutes />);
}
