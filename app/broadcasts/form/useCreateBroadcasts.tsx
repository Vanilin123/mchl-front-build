import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeBroadcasts } from '../../../types/broadcasts.types'

import { broadcastsService } from '../../../services/broadcasts.services'

export function useCreateBroadcasts() {
	const queryClient = useQueryClient()
	
	const { mutate: createBroadcasts, isPending } = useMutation({
		mutationKey: ['create broadcasts'],
		mutationFn: (data: TypeBroadcasts) =>
			broadcastsService.createBroadcasts(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['broadcasts']
			})
		}
	})
	
	return {
		createBroadcasts,
		isPending
	}
}
