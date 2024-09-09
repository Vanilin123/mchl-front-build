import { useMutation, useQueryClient } from '@tanstack/react-query'

import { playerService } from '../../../../services/player.service'

export function useDeletePlayer(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deletePlayer, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete player', itemId],
		mutationFn: () => playerService.deletePlayer(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['players']
			})
		}
	})

	return { deletePlayer, isDeletePending }
}

export function useDeleteAdminPlayer(itemId: string) {
	const queryClient = useQueryClient()
	
	const { mutate: deleteAdminPlayer, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete admin player', itemId],
		mutationFn: () => playerService.deleteAdminPlayer(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['players']
			})
		}
	})
	
	return { deleteAdminPlayer, isDeletePending }
}

