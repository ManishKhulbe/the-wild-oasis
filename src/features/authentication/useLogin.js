import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Login as loginApi } from "../../services/apiAuth";

export function useLogin() {
    const queryClient = useQueryClient()
const navigate = useNavigate()
    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user.user) //manually add user data to react query cache because we dont want to refetch when navigate to dashboard because of protected route
            navigate("/dashboard", { replace: true });
        },
        onError: (err) => {
            toast.error('Provided email and password are incorrect')
        }
    });

    return { login , isLoading}
}