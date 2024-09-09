import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import type { ITeamResponse } from '../../../../../types/team'

import { teamService } from '../../../../../services/team.service'

export const useTeam = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['teams'],
		queryFn: () => teamService.getTeam()
	})

	const [items, setItems] = useState<ITeamResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems, isLoading }
}

export const useAllTeam = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['allTeams'],
		queryFn: () => teamService.getAllTeam()
	})
	
	const [itemsAllTeam, setItems] = useState<ITeamResponse[] | undefined>(
		data?.data
	)
	
	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])
	
	return { itemsAllTeam, setItems, isLoading }
}

