import { useMutation, useQueryClient } from '@tanstack/react-query'
import { newsService } from '../../../services/news.services'

export function useCreateNews() {
	const queryClient = useQueryClient()

	const { mutate: createNews, isPending } = useMutation({
		mutationKey: ['create news'],
		mutationFn: (data) =>
			newsService.createNews(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['news']
			})
		}
	})

	return {
		createNews,
		isPending
	}
}
