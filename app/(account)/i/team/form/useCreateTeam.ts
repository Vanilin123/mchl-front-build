import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeTeamFormState } from '../../../../../types/team'

import { teamService } from '../../../../../services/team.service'

export function useCreateTeam() {
	const queryClient = useQueryClient()

	const { mutate: createTeam, isPending } = useMutation({
		mutationKey: ['create team'],
		mutationFn: (data: TypeTeamFormState) =>
			teamService.createTeam(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['team']
			})
		}
	})

	return {
		createTeam,
		isPending
	}
}

export function useCreateAdminTeam() {
	const queryClient = useQueryClient()
	
	const { mutate: createAdminTeam,isPending } = useMutation({
		mutationKey: ['create admin team'],
		mutationFn: (data: TypeTeamFormState) =>
			teamService.createAdminTeam(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['team']
			})
		}
	})
	
	return {
		createAdminTeam,
		isPending
	}
}