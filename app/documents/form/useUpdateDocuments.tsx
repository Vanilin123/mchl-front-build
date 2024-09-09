import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeDocuments } from '../../../types/documents.types'

import { documentsService } from '../../../services/documents.services'

export function useUpdateDocuments(key?: string) {
	const queryClient = useQueryClient()
	
	const { mutate: updateDocuments } = useMutation({
		mutationKey: ['update documents', key],
		mutationFn: ({ id, data }: { id: string; data: TypeDocuments }) =>
			documentsService.updateDocuments(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['documents']
			})
		}
	})
	
	return { updateDocuments }
}