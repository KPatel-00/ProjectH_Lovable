
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

/**
 * Centralized sign out hook, clears tokens, shows toast, redirects.
 */
export function useSignOut() {
  const navigate = useNavigate();

  // Unified sign out function for all consumers
  return useCallback(() => {
    localStorage.clear();
    sessionStorage.clear();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully.",
    });
    navigate("/");
  }, [navigate]);
}
