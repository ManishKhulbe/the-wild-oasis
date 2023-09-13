import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { signup as signUpApi } from "../../services/apiAuth";

export function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signUpApi,
      onSuccess: (user) => {
        toast.success('Account successfully created! Please verify the new account from the users email address.')
    }
  });
  return { isLoading, signup };
}
