import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings";

export function useCheckin() {
    const queryClient = useQueryClient();
    const navigate= useNavigate()
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({bookingId, breakfast}) =>
      updateBooking(bookingId, { status: "checked-in", isPaid: true,...breakfast }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
        queryClient.invalidateQueries({ active: true }); //invalidate all active data in cache
        navigate('/')
      },
    onError:()=>toast.error('their was an error while checking in ')
  });
    
    return {checkin, isCheckingIn}
}
