import { useContextSelector } from "use-context-selector";

import { LoadContext } from "../context/LoadContext";

export function useLoad() {
  const toggleLoading = useContextSelector(
    LoadContext, 
    (load) => load.toggleLoading);

  return {
    toggleLoading,
  };
}
