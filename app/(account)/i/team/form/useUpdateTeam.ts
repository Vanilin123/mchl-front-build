import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeTeamFormState } from '../../../../../types/team'

import { teamService } from '../../../../../services/team.service'

export function useUpdateTeam(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTeam } = useMutation({
		mutationKey: ['update team', key],
		mutationFn: ({ id, data }: { id: string;  data: TypeTeamFormState }) =>
			teamService.updateTeam(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['team']
			})
		}
	})

	return { updateTeam }
}

export function useUpdateAdminTeam(key?: string) {
	const queryClient = useQueryClient()
	
	const { mutate: updateAllTeam } = useMutation({
		mutationKey: ['update admin team', key],
		mutationFn: ({ id, data }: { id: string;  data: TypeTeamFormState }) =>
			teamService.updateAdminTeam(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['team']
			})
		}
	})
	
	return { updateAllTeam }
}