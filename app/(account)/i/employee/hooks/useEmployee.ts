import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import type { IEmployeeResponse } from '../../../../../types/employee'
import { employeeService } from '../../../../../services/employee.service'

export const useEmployee = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['employees'],
		queryFn: () => employeeService.getEmployee()
	})

	const [itemsEmployee, setItems] = useState<IEmployeeResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { itemsEmployee, setItems, isLoading }
}

export const useAllEmployee = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['allEmployees'],
		queryFn: () => employeeService.getAllEmployee()
	})
	
	const [itemsAllEmployee, setItems] = useState<IEmployeeResponse[] | undefined>(
		data?.data
	)
	
	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])
	
	return { itemsAllEmployee, setItems, isLoading }
}

