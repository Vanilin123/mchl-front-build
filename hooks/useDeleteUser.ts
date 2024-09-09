import { useMutation, useQueryClient } from '@tanstack/react-query'

import { userService } from '../services/user.service'

export function useDeleteUser(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteUser, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete user', itemId],
		mutationFn: () => userService.deleteAdminUser(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['users']
			})
		}
	})

	return { deleteUser, isDeletePending }
}
