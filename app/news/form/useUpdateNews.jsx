import { useMutation, useQueryClient } from '@tanstack/react-query'
import { newsService } from '../../../services/news.services'

export function useUpdateNews(key) {
	const queryClient = useQueryClient()

	const { mutate: updateNews } = useMutation({
		mutationKey: ['update news', key],
		mutationFn: ({ id, data }) =>
			newsService.updateNews(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['news']
			})
		}
	})

	return { updateNews }
}
