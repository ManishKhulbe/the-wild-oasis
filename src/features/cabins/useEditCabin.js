import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useEditCabin() {
  const queryClient = useQueryClient();
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id), // react query take one arg in mutation function so directly destructure and pass to function here
    onSuccess: () => {
      toast.success("Cabin Edited successfully!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
    return {editCabin , isEditing}
}
