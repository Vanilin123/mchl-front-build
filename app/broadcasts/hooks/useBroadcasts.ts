import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useEffect, useState } from 'react'
import type { BroadcastsResponse } from '../../../types/broadcasts.types'
import { broadcastsService } from '../../../services/broadcasts.services'
import { useSearchParams } from 'next/navigation'



export const useBroadcasts = () => {

	const { data, isLoading } = useQuery({
		queryKey: ['broadcasts'],
		queryFn: () => broadcastsService.getBroadcasts()
	})

	const [items, setItems] = useState<BroadcastsResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, isLoading }
}
