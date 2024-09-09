import { useMutation, useQueryClient } from '@tanstack/react-query'

import { employeeService } from '../../../../../services/employee.service'

export function useDeleteEmployee(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteEmployee, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete employee', itemId],
		mutationFn: () => employeeService.deleteEmployee(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['employees']
			})
		}
	})

	return { deleteEmployee, isDeletePending }
}

export function useDeleteAdminEmployee(itemId: string) {
	const queryClient = useQueryClient()
	
	const { mutate: deleteAdminEmployee, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete admin employee', itemId],
		mutationFn: () => employeeService.deleteAdminEmployee(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['employees']
			})
		}
	})
	
	return { deleteAdminEmployee, isDeletePending }
}

