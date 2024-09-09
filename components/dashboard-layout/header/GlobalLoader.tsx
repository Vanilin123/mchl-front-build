'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import Loader from '../../Loader/Loader'



export function GlobalLoader() {
	const isMutating = useIsMutating()
	const isFetching = useIsFetching()

	return isFetching || isMutating ? (
		<div className='fixed top-layout right-layout z-50'>
			<Loader />
		</div>
	) : null
}
