import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeDocuments } from '../../../types/documents.types'

import { documentsService } from '../../../services/documents.services'

export function useCreateDocuments() {
	const queryClient = useQueryClient()
	
	const { mutate: createDocuments, isPending } = useMutation({
		mutationKey: ['create documents'],
		mutationFn: (data: TypeDocuments) =>
			documentsService.createDocuments(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['documents']
			})
		}
	})
	
	return {
		createDocuments,
		isPending
	}
}
