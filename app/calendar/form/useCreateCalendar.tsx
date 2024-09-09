import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeCalendar } from '../../../types/calendar.types'

import { calendarService } from '../../../services/calendar.services'

export function useCreateCalendar() {
	const queryClient = useQueryClient()
	
	const { mutate: createCalendar, isPending } = useMutation({
		mutationKey: ['create calendar'],
		mutationFn: (data: TypeCalendar) =>
			calendarService.createCalendar(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['calendar']
			})
		}
	})
	
	return {
		createCalendar,
		isPending
	}
}
