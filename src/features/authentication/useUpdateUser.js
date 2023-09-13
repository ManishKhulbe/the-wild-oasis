import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";


export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isEditing } = useMutation({
    mutationFn: ({ fullName, avatar }) =>
      updateCurrentUser({ fullName, avatar }),
    onSuccess: ({user}) => {
        toast.success("User account Edited successfully!");
        // queryClient.setQueryData('user', user) to manually set data in react query
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { updateUser, isEditing };
}
