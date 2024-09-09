'use client'

import { FormProvider, useForm } from 'react-hook-form'

import type { TypeEmployeeFormState } from '../../../../types/employee'

import { EmployeeBlockingList } from './EmployeeBlockingList'
import { EmployeeForm } from './form/employeeForm'

export function EmployeeBlocking() {
	const methods = useForm<TypeEmployeeFormState>()

	return (
		<FormProvider {...methods}>
		<EmployeeBlockingList />
		</FormProvider>
	)
}
