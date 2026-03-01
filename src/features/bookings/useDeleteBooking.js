import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings'
import toast from 'react-hot-toast'

export function useDeleteBooking() {
  const queryClient = useQueryClient()

  const { isPending, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: async () => {
      toast.success('Booking successfully deleted')
      await queryClient.invalidateQueries({ queryKey: ['bookings'] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isPending, deleteBooking }
}
