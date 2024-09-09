import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeUserFormState } from '../types/user'

import { userService } from '../services/user.service'

export function useUpdateUser(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateUser } = useMutation({
		mutationKey: ['update user', key],
		mutationFn: ({ id, data }: { id: string; data: TypeUserFormState }) =>
			userService.updateAdminUser(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['users']
			})
		}
	})

	return { updateUser }
}
