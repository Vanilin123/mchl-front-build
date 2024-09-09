import { documentsService } from '../../../services/documents.services'
import { useMutation, useQueryClient } from '@tanstack/react-query'



export function useDeleteDocuments(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteDocuments, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete documents', itemId],
		mutationFn: () => documentsService.deleteDocuments(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['documents']
			})
		}
	})

	return { deleteDocuments, isDeletePending }
}
