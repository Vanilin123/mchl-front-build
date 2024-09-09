'use client'

import { FormProvider, useForm } from 'react-hook-form'

import type { TypeEmployeeFormState } from '../../../../types/employee'

import { TeamBlockingList } from './TeamBlockingList'
import { TeamForm } from './form/teamForm'

export function TeamBlocking() {
	const methods = useForm<TypeEmployeeFormState>()

	return (
		<FormProvider {...methods}>
		<TeamBlockingList />
		</FormProvider>
	)
}
