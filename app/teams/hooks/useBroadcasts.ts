import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { teamService } from '../../../services/team.service'
import type { ITeamResponse } from '../../../types/team'


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