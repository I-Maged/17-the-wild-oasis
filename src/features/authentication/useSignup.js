import { useMutation } from '@tanstack/react-query'
import { signup as signupApi } from '../../services/apiAuth'
import toast from 'react-hot-toast'

export function useSignup() {
  const { isPending, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        'Account created successfully. Please verify your email address',
      )
    },
  })

  return { isPending, signup }
}
