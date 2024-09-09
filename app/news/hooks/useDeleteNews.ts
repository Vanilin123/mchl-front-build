import { newsService } from '../../../services/news.services'
import { useMutation, useQueryClient } from '@tanstack/react-query'



export function useDeleteNews(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteNews, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete news', itemId],
		mutationFn: () => newsService.deleteNews(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['news']
			})
		}
	})

	return { deleteNews, isDeletePending }
}
