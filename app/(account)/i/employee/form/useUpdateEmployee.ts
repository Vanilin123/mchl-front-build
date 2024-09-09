import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeEmployeeFormState } from '../../../../../types/employee'

import { employeeService } from '../../../../../services/employee.service'

export function useUpdateEmployee(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateEmployee } = useMutation({
		mutationKey: ['update employee', key],
		mutationFn: ({ id, data }: { id: string;  data: TypeEmployeeFormState }) =>
			employeeService.updateEmployee(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['employees']
			})
		}
	})

	return { updateEmployee }
}

export function useUpdateAdminEmployee(key?: string) {
	const queryClient = useQueryClient()
	
	const { mutate: updateAllEmployee } = useMutation({
		mutationKey: ['update admin employee', key],
		mutationFn: ({ id, data }: { id: string;  data: TypeEmployeeFormState }) =>
			employeeService.updateAdminEmployee(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['employees']
			})
		}
	})
	
	return { updateAllEmployee }
}