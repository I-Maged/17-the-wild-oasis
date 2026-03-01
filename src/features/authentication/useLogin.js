import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginApi } from '../../services/apiAuth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useLogin() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { isPending, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: async (user) => {
      toast.success('Logged in successfully')
      queryClient.setQueryData(['user'], user.user)
      navigate('/dashboard')
    },
    onError: (err) => toast.error(err.message),
  })

  return { isPending, login }
}
