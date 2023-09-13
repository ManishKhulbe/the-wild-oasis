import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logout as logoutApi } from "../../services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate("");
  const { isLoading, mutate: logout } = useMutation({
    mutationFn: logoutApi,
      onSuccess: () => {
      queryClient.removeQueries(); 
      navigate("/login", { replace: true });
    }, // so that we replace the place where we were earlier so that back button don't go their
  });
  return { isLoading, logout };
}
