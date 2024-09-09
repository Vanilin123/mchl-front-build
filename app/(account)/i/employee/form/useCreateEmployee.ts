import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeEmployeeFormState } from '../../../../../types/employee'

import { employeeService } from '../../../../../services/employee.service'

export function useCreateEmployee() {
	const queryClient = useQueryClient()

	const { mutate: createEmployee, isPending } = useMutation({
		mutationKey: ['create employee'],
		mutationFn: (data: TypeEmployeeFormState) =>
			employeeService.createEmployee(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['employee']
			})
		}
	})

	return {
		createEmployee,
		isPending
	}
}

export function useCreateAdminEmployee() {
	const queryClient = useQueryClient()
	
	const { mutate: createAdminEmployee,isPending } = useMutation({
		mutationKey: ['create admin employee'],
		mutationFn: (data: TypeEmployeeFormState) =>
			employeeService.createAdminEmployee(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['employee']
			})
		}
	})
	
	return {
		createAdminEmployee,
		isPending
	}
}