import { useMutation, useQueryClient } from '@tanstack/react-query'

import { teamService } from '../../../../../services/team.service'

export function useDeleteTeam(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteTeam, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete team', itemId],
		mutationFn: () => teamService.deleteTeam(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['teams']
			})
		}
	})

	return { deleteTeam, isDeletePending }
}

export function useDeleteAdminTeam(itemId: string) {
	const queryClient = useQueryClient()
	
	const { mutate: deleteAdminTeam, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete admin team', itemId],
		mutationFn: () => teamService.deleteAdminTeam(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['teams']
			})
		}
	})
	
	return { deleteAdminTeam, isDeletePending }
}

