import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins'
import toast from 'react-hot-toast'

export function useDeleteCabin() {
  const queryClient = useQueryClient()

  const { isPending, mutate: deleteCabin } = useMutation({
    // mutationFn: (id) => deleteCabin(id),
    mutationFn: deleteCabinApi,
    onSuccess: async () => {
      toast.success('Cabin successfully deleted')
      await queryClient.invalidateQueries({ queryKey: ['cabins'] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isPending, deleteCabin }
}
