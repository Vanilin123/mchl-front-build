import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import type { IUserResponse } from '../types/user'

import { userService } from '../services/user.service'

export const useUser = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['users'],
		queryFn: () => userService.getAllUser()
	})

	const [items, setItems] = useState<IUserResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, setItems, isLoading }
}
