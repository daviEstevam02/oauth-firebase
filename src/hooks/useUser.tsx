import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/index";

export function useUser() {
  return useContext(AuthContext);
}
