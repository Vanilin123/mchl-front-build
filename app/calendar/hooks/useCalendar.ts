import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useEffect, useState } from 'react'
import type { CalendarResponse } from '../../../types/calendar.types'
import { calendarService } from '../../../services/calendar.services'
import { useSearchParams } from 'next/navigation'



export const useCalendar = () => {

	const { data, isLoading } = useQuery({
		queryKey: ['calendar'],
		queryFn: () => calendarService.getCalendar()
	})

	const [items, setItems] = useState<CalendarResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, isLoading }
}
