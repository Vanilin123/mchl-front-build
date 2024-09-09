'use client'



import { useProfile } from '../../../../hooks/useProfile'
import Loader from '../../../Loader/Loader'

export function Profile() {
	const { data, isLoading } = useProfile()

	return (
		<div className='absolute top-big-layout right-big-layout'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='flex items-center'>
					<div className='text-right mr-3'>
					
					</div>

					<div className='w-10 h-10 flex justify-center items-center text-2xl text-white bg-white/20 rounded uppercase'>
					
					</div>
				</div>
			)}
		</div>
	)
}
