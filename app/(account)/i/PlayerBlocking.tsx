'use client'

import { FormProvider, useForm } from 'react-hook-form'

import type { TypePlayerFormState } from '../../../types/player'
import { PlayerBlockingList } from './PlayerBlockingList'
import { PlayerForm } from './form/playerForm'

export function PlayerBlocking() {
	const methods = useForm<TypePlayerFormState>()

	return (
		<FormProvider {...methods}>
		<PlayerBlockingList />
		</FormProvider>
	)
}
