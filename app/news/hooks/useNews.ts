import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useEffect, useState } from 'react'
import type { NewsResponse } from '../../../types/news.types'
import { newsService } from '../../../services/news.services'
import { useSearchParams } from 'next/navigation'



export const useNews = () => {

	const { data, isLoading } = useQuery({
		queryKey: ['news'],
		queryFn: () => newsService.getNews()
	})

	const [items, setItems] = useState<NewsResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, isLoading }
}
