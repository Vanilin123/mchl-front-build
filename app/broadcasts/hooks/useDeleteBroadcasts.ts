import { broadcastsService } from '../../../services/broadcasts.services'
import { useMutation, useQueryClient } from '@tanstack/react-query'



export function useDeleteBroadcasts(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteBroadcasts, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete broadcasts', itemId],
		mutationFn: () => broadcastsService.deleteBroadcasts(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['broadcasts']
			})
		}
	})

	return { deleteBroadcasts, isDeletePending }
}
