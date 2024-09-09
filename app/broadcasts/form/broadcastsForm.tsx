import { Field } from '../../../components/Fields/Field'
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'
// @ts-ignore
import { Button } from '../../../components/buttons/Button'
import { useState } from "react";
// @ts-ignore
import type { TypeBroadcasts } from '@/types/broadcasts.types'

import React from "react";
import { useProfile } from '../../../hooks/useProfile'
import { useCreateBroadcasts } from './useCreateBroadcasts'
import { useUpdateBroadcasts } from './useUpdateBroadcasts'


export function BroadcastsingForm() {
	
	const [showModal, setShowModal] = useState(false);
	const { data } = useProfile()
	const { register, watch, reset, handleSubmit, control } =
		useFormContext<TypeBroadcasts>()
	
	const existsId = watch('id')
	
	const { updateBroadcasts } = useUpdateBroadcasts(existsId)
	const { createBroadcasts, isPending } = useCreateBroadcasts()
	
	const onSubmit: SubmitHandler<TypeBroadcasts> = data => {
		
		const { id, ...rest } = data
		const dto = { ...rest }
		
		
		if (id) {
			// @ts-ignore
			updateBroadcasts({
				id,
				data: dto
			})
		} else {
			// @ts-ignore
			createBroadcasts(dto)
		}
		console.log(data)
		
		reset({
			title: '',
			broadcastsLink: '',
			id: undefined,
		})
	}
	if (data?.userRole === 'admin') {
		return (
			<>
				<div className="flex items-end h-30 mb-[10px]">
					<button
						className="px-6 py-3 text-white bg-blue-1 rounded-md hover:bg-blue-3 transition duration-200 ease-in-out transform -translate-x-1/12"
						type="button"
						onClick={() => setShowModal(true)}
					>
						Создать трансляцию
					</button>
				</div>
				{showModal ? (
					<>
						<div className="fixed inset-0 z-10 overflow-y-auto bg-zinc-300 bg-opacity-40">
							<div
								className="fixed inset-0 w-full h-full bg-black opacity-40"
								onClick={() => setShowModal(false)}
							></div>
							<div className="flex items-center min-h-screen px-4 py-8">
								<div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
									<div>
										<div>
											<div className="flex items-center justify-between">
												<h3 className='text-lg font-medium text-gray-800'>
													Создать трансляцию
												</h3>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													fill='currentColor'
													className='mr-3 h-5 w-5'
													onClick={() => setShowModal(false)}
												>
													<path
														fillRule='evenodd'
														d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
														clipRule='evenodd'
													/>
												</svg>
											</div>
											<div className='items-center gap-2 mt-3'>
												<form onSubmit={handleSubmit(onSubmit)}>
													<Field {...register('title', { required: true })}
													       id='title'
													       label='Заголовок трансляции'
													       placeholder='Заголовок трансляции'
													       extra='mb-4'
													       className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
													/>
													
													<Field {...register('broadcastsLink', { required: true })}
													       id='broadcastsLink'
													       label='Ссылка на трансляцию'
													       placeholder='Ссылка на трансляцию'
													       extra='mb-4'
													       className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
													/>
													
													<Field {...register('text', { required: true })}
													       id='text'
													       label='Текст к трансляции'
													       placeholder='Текст к трансляции'
													       extra='mb-4'
													       type='text'
													       className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 h-[200px] dark:focus:ring-blue-500 dark:focus:border-blue-500'
													/>
													<Field {...register('dateGame', { required: true })}
													       id='dateGame'
													       label='Дата трансляции'
													       placeholder='Дата трансляции'
													       extra='mb-4'
													       type="date"
													/>
													<Button
														type='submit'
														disabled={isPending}
														className="w-full mt-2 p-2.5 flex-1 rounded-md outline-none border ring-offset-2 ring-indigo-600 text-white bg-blue-1 rounded-md hover:bg-blue-3 transition duration-200 ease-in-out transform -translate-x-1/12 focus:ring-2"
													>
														Запланировать трансляцию
													</Button>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</>
				) : null}
			</>
		);
	}
}


