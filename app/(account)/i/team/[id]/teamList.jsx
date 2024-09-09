'use client'

import { FormProvider, useForm } from 'react-hook-form'

import TeamAll from './teamAll'



export function TeamList() {
	const methods = useForm()


	return (
		<FormProvider {...methods}>
			
			<TeamAll/>
		
		</FormProvider>
	)
}
