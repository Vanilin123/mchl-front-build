import { Edit, Loader, Radius, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useFormContext } from 'react-hook-form'
import ReactPlayer from 'react-player'
import { Button } from '../../components/buttons/Button'
import { Field } from '../../components/Fields/Field'
import { useProfile } from '../../hooks/useProfile'

import type {
	CalendarResponse,
	TypeCalendar
} from '../../types/calendar.types'
import { useCreateCalendar } from './form/useCreateCalendar'
import { useUpdateCalendar } from './form/useUpdateCalendar'


import { useDeleteCalendar } from './hooks/useDeleteCalendar'

export function Calendar({ item }: { item: CalendarResponse }) {
	const [showModal, setShowModal] = useState(false);
	const { reset,watch, handleSubmit,register } = useFormContext<TypeCalendar>()
	const { deleteCalendar, isDeletePending } = useDeleteCalendar(item.id)
	const { data } = useProfile()
	
	const existsId = watch('id')
	
	const { updateCalendar } = useUpdateCalendar(existsId)
	
	const onSubmit: SubmitHandler<TypeCalendar> = data => {
		const { id, ...rest } = data
		const dto = { ...rest }
		
		data.logoTeamOne === item.logoTeamOne
		dto.logoTeamOne === item.logoTeamOne
		data.logoTeamSecond === item.logoTeamSecond
		dto.logoTeamSecond === item.logoTeamSecond
		if (id) {
			// @ts-ignore
			updateCalendar({
				id,
				data: dto
			})
		}
		
		
		console.log(data)
		
		reset({
			teamOne :'',
			teamSecond:'',
			logoTeamOne:'',
			logoTeamSecond :'',
			resultTeamOne :'',
			resultTeamSecond:'',
			typeOfEndGame :'',
			dateOfGame:'',
			id: undefined,
		})
	}
	if (data?.userRole === 'admin') {
	return (
		<div className="hover:bg-blue-50 mb-[10px] transition border-t-[1px] border-b-[1px] items-center p-[10px]">
			<div className='flex flex-col justify-center items-center flex flex-row justify-between items-center w-[100%]'>
				<div className='flex flex-col justify-between items-center w-[100%]'>
					<div className='flex flex-row w-[100%] justify-between items-center'>
						<div className='flex flex-row items-center'>
							<Image src={item.logoTeamOne} alt={item.teamOne} width={80} height={80} />
							<p className='text-[28px] ml-[30px]'>{item.teamOne}</p>
						</div>
						<div className='flex flex-col items-center'>
							<p className='text-[28px]'>{item.resultTeamOne}-{item.resultTeamSecond}</p>
							{item.dateOfGame}
						</div>
						<div className='flex flex-row items-center'>
							<p className='text-[28px] mr-[30px]'>{item.teamSecond}</p>
							<Image src={item.logoTeamSecond} alt={item.teamSecond} width={80} height={80} />
						</div>
					</div>
				</div>
				<div className='buttons_trash'>
					<button
						onClick={() => {
							reset({
								teamOne: item.teamOne,
								teamSecond: item.teamSecond,
								logoTeamOne: item.logoTeamOne,
								logoTeamSecond: item.logoTeamSecond,
								resultTeamOne: item.resultTeamOne,
								resultTeamSecond: item.resultTeamSecond,
								typeOfEndGame: item.typeOfEndGame,
								dateOfGame: item.dateOfGame,
								id: item.id
							})
							setShowModal(true)
						}}
						className='opacity-50 transition-opacity hover:opacity-100 mr-2'
					>
						<Edit size={25} />
					</button>
					<button
						onClick={() => deleteCalendar()}
						className='opacity-50 transition-opacity hover:opacity-100'
					>
						{isDeletePending ? <Loader size={25} /> : <Trash size={25} />}
					</button>
				</div>
				{showModal ? (
					<>
						<div className='fixed inset-0 z-10 overflow-y-auto bg-zinc-300 bg-opacity-40'>
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
													Запланировать игру
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
													<Field {...register('teamOne', { required: true })}
													       id='title'
													       label='Команда один'
													       placeholder='Команда один'
													       extra='mb-4'
													       className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
													/>
													
													<Field {...register('teamSecond', { required: true })}
													       id='calendarLink'
													       label='Команда два'
													       placeholder='Команда два'
													       extra='mb-4'
													       className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
													
													/>
													
													<Field {...register('resultTeamOne', { required: true })}
													       id='dateGame'
													       label='Результат первой команды'
													       placeholder='Результат первой команды'
													       extra='mb-4'
													       className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
													/>
													<Field {...register('resultTeamSecond', { required: true })}
													       id='dateGame'
													       label='Результат второй команды'
													       placeholder='Результат второй команды'
													       extra='mb-4'
													       className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
													/>
													<Field {...register('typeOfEndGame', { required: true })}
													       id='dateGame'
													       label='Как закончилась игра'
													       placeholder='Как закончилась игра'
													       extra='mb-4'
													       className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
													/>
													<Field {...register('dateOfGame', { required: true })}
													       id='dateGame'
													       label='Дата трансляции'
													       placeholder='Дата трансляции'
													       extra='mb-4'
													       type='date'
													/>
													<Button
														type='submit'
														className="w-full mt-2 p-2.5 flex-1 rounded-md outline-none border ring-offset-2 ring-indigo-600 text-white bg-blue-1 rounded-md hover:bg-blue-3 transition duration-200 ease-in-out transform -translate-x-1/12 focus:ring-2"
													>
														Редактировать игру
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
			</div>
		</div>
	)}else{
		return (
			<div className="hover:bg-blue-50 mr-3 transition border-t-[1px] border-b-[1px] items-center p-[10px]">
				<div className='flex flex-col justify-center items-center flex flex-row justify-between items-center w-[100%]'>
					<div className='flex flex-col justify-between items-center w-[100%]'>
						<div className='flex flex-row w-[100%] justify-between items-center'>
							<div className='flex flex-row items-center'>
								<Image src={item.logoTeamOne} alt={item.teamOne} width={80} height={80} />
								<p className='text-[28px] ml-[30px]'>{item.teamOne}</p>
							</div>
							<div className='flex flex-col items-center'>
								<p className='text-[28px]'>{item.resultTeamOne}-{item.resultTeamSecond}</p>
								{item.dateOfGame}
							</div>
							<div className='flex flex-row items-center'>
								<p className='text-[28px] mr-[30px]'>{item.teamSecond}</p>
								<Image src={item.logoTeamSecond} alt={item.teamSecond} width={80} height={80} />
							</div>
						</div>
					</div>
				</div>
				</div>
				)
	}
}
