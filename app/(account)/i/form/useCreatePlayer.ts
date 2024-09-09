import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypePlayerFormState } from '../../../../types/player'

import { playerService } from '../../../../services/player.service'

export function useCreatePlayer() {
	const queryClient = useQueryClient()

	const { mutate: createPlayer, isPending } = useMutation({
		mutationKey: ['create player'],
		mutationFn: (data: TypePlayerFormState) =>
			playerService.createPlayer(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['player']
			})
		}
	})

	return {
		createPlayer,
		isPending
	}
}

export function useCreateAdminPlayer() {
	const queryClient = useQueryClient()
	
	const { mutate: createAdminPlayer,isPending } = useMutation({
		mutationKey: ['create admin player'],
		mutationFn: (data: TypePlayerFormState) =>
			playerService.createAdminPlayer(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['player']
			})
		}
	})
	
	return {
		createAdminPlayer,
		isPending
	}
}