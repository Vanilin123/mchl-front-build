import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeCalendar } from '../../../types/calendar.types'

import { calendarService } from '../../../services/calendar.services'

export function useUpdateCalendar(key?: string) {
	const queryClient = useQueryClient()
	
	const { mutate: updateCalendar } = useMutation({
		mutationKey: ['update calendar', key],
		mutationFn: ({ id, data }: { id: string; data: TypeCalendar }) =>
			calendarService.updateCalendar(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['calendar']
			})
		}
	})
	
	return { updateCalendar }
}