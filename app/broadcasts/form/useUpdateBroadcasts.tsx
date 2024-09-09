import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeBroadcasts } from '../../../types/broadcasts.types'

import { broadcastsService } from '../../../services/broadcasts.services'

export function useUpdateBroadcasts(key?: string) {
	const queryClient = useQueryClient()
	
	const { mutate: updateBroadcasts } = useMutation({
		mutationKey: ['update broadcasts', key],
		mutationFn: ({ id, data }: { id: string; data: TypeBroadcasts }) =>
			broadcastsService.updateBroadcasts(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['broadcasts']
			})
		}
	})
	
	return { updateBroadcasts }
}