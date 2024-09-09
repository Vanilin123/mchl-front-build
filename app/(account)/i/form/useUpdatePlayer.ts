import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypePlayerFormState } from '../../../../types/player'

import { playerService } from '../../../../services/player.service'

export function useUpdatePlayer(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updatePlayer } = useMutation({
		mutationKey: ['update player', key],
		mutationFn: ({ id, data }: { id: string;  data: TypePlayerFormState }) =>
			playerService.updatePlayer(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['players']
			})
		}
	})

	return { updatePlayer }
}

export function useUpdateAdminPlayer(key?: string) {
	const queryClient = useQueryClient()
	
	const { mutate: updateAllPlayer } = useMutation({
		mutationKey: ['update admin player', key],
		mutationFn: ({ id, data }: { id: string;  data: TypePlayerFormState }) =>
			playerService.updateAdminPlayer(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['players']
			})
		}
	})
	
	return { updateAllPlayer }
}