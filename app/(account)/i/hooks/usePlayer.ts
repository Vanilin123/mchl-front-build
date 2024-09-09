import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import type { IPlayerResponse } from '../../../../types/player'

import { playerService } from '../../../../services/player.service'

export const usePlayer = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['players'],
		queryFn: () => playerService.getPlayer()
	})

	const [items, setItems] = useState<IPlayerResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems, isLoading }
}

export const useAllPlayer = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['allPlayers'],
		queryFn: () => playerService.getAllPlayer()
	})
	
	const [itemsAll, setItems] = useState<IPlayerResponse[] | undefined>(
		data?.data
	)
	
	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])
	
	return { itemsAll, setItems, isLoading }
}

