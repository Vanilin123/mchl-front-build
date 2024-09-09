import { calendarService } from '../../../services/calendar.services'
import { useMutation, useQueryClient } from '@tanstack/react-query'



export function useDeleteCalendar(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteCalendar, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete calendar', itemId],
		mutationFn: () => calendarService.deleteCalendar(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['calendar']
			})
		}
	})

	return { deleteCalendar, isDeletePending }
}
