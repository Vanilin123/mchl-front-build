import { motion } from 'framer-motion'
import { Edit, GripVertical, Loader, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'
import { Button } from '../../../../components/buttons/Button'
import { Field } from '../../../../components/Fields/Field'
import { SingleSelect } from '../../../../components/SingleSelect'
import type { IProfileResponse } from '../../../../services/user.service'

import type {
	ITeamResponse,
	TypeTeamFormState
} from '../../../../types/team'

import { useCreateTeam } from './form/useCreateTeam'
import { useUpdateAdminTeam, useUpdateTeam } from './form/useUpdateTeam'


import { useDeleteAdminTeam, useDeleteTeam } from './hooks/useDeleteTeam'

export function Team({ item, data }: { item: ITeamResponse  ,data:IProfileResponse}) {
	
	
	const { deleteTeam, isDeletePending } = useDeleteTeam(item.id)

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const [teamLogo, setTeamLogo] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	const [statement, setStatement] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	const [application, setApplication] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	
	
	
	const convertTeamLogo = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setTeamLogo({
				// @ts-ignore
				base64textString: reader.result
			});
		};
		
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	};
	const convertStatement = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setStatement({
				// @ts-ignore
				base64textString: reader.result
			});
		};
		
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	};
	const convertApplication = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setApplication({
				// @ts-ignore
				base64textString: reader.result
			});
		};
		
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	};
	
	function teamChange() {
		setOpen(!open)
		reset({
			teamName: '',
			id: undefined,
			teamLogo: '',
			statement: '',
			application:''
		})
	}
	
	function teamChangeClick() {
		setOpen(!open)
		reset({
			teamName: '',
			id: undefined,
			teamLogo: '',
			statement: '',
			application:''
		})
	}
	
	const top = {
		clozed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: "rgb(225,225,225)",
		}
	}
	
	const center = {
		clozed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		}
	}
	
	const bottom = {
		clozed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: "rgb(225,225,225)",
		}
	}
	
	
	const list = {
		clozed: {
			x: "100vw",
		},
		opened: {
			x: "0",
			transition: {
				staggerChildren: 0.2
			}
		}
	}
	const { register, control, watch, reset, handleSubmit, getValues } =
		useFormContext<TypeTeamFormState>()
	
	const existsId = watch('id')
	
	const { deleteAdminTeam } = useDeleteAdminTeam(item.id)
	const { updateAllTeam } = useUpdateAdminTeam(existsId)
	const { updateTeam } = useUpdateTeam(existsId)
	if (data?.userRole === 'admin'){
		
		const onSubmit: SubmitHandler<TypeTeamFormState> = data => {
			// @ts-ignore
			const { id, typeOfTeam, ...rest } = data
			const dto = { ...rest, typeOfTeam:typeOfTeam}
			// @ts-ignore
			if (teamLogo.base64textString === ''){
				data.teamLogo = item.teamLogo
				dto.teamLogo = item.teamLogo
			}else{
				data.teamLogo = teamLogo.base64textString;
				dto.teamLogo = teamLogo.base64textString;
			}
			
			if (application.base64textString === ''){
				dto.application = item.application
				data.application = item.application
			}else{
				dto.application= application.base64textString;
				data.application = application.base64textString;
			}
			
			if (statement.base64textString === ''){
				dto.statement= item.statement
				data.statement= item.statement
			}else{
				dto.statement = statement.base64textString;
				data.statement = statement.base64textString;
			}
			
			
			
			updateAllTeam({
				id,
				data: dto,
			})
			
			
			reset({
				teamName: '',
				id: undefined,
				teamLogo: '',
				teamType:'',
				statement: '',
				application:''
			})
			setOpen(!open)
		}
		
		return (
			<tr className='bg-white border pb-4 pt-4'>
				<th className='px-6 py-4 border-r'>
					<Image  src={item.teamLogo} width={70}
					       height={70} alt={item.teamName} /></th>
				<th className='px-6 py-4 border-r'>{item.teamName}</th>
				<th className='px-6 py-4 border-r'><Link className='text-blue-1 text-[14px]' key={item.id} href={`http://localhost:3000/i/team/${item.id}`}>Посмотреть команду полностью</Link></th>
				<th className='px-6 py-4 border-r'>
					<div>
						<div className=''>
							<button className='text-blue-1 text-[14px]' onClick={teamChange}>
								Анкета команды
							</button>
						</div>
						{open && (
							<motion.div variants={list}
							            initial={'clozed'}
							            animate={'opened'}
							            className='absolute pt-[15px] pl-[15px] right-0 top-0 flex flex-col gap-2 text-3xl items-start h-100% bg-white text-black-1 w-5/12 z-[200] border-l-[2px]'>
								<button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={teamChangeClick}>
									<motion.div variants={top} animate={open ? 'opened' : 'clozed'}
									            className='w-10 h-1 bg-blue-500 rounded origin-left'></motion.div>
									<motion.div variants={center} animate={open ? 'opened' : 'clozed'}
									            className='w-10 h-1 bg-blue-500 rounded'>
									</motion.div>
									<motion.div variants={bottom} animate={open ? 'opened' : 'clozed'}
									            className='w-10 h-1 bg-blue-500 rounded origin-left'></motion.div>
								</button>
								<form
									onSubmit={handleSubmit(onSubmit)}
									className='text-black-1 w-5/6'
								>
									<h3 className='text-[18px]'>Основная информация</h3>
									<Field
										{...register('teamName', {
											required: true
										})}
										id='teamName'
										label='Название команды'
										placeholder='Название команды'
										extra='mb-4 mt-4'
										className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
									/>
									<Field
										{...register('teamType', {
											required: true
										})}
										id='teamType'
										label='Округ команды'
										placeholder='Округ команды'
										extra='mb-4 mt-4'
										className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
									/>
									<h3 className='text-[18px] mb-4'>Документы</h3>
									<div className='input__wrapper'>
										<span className='mb-[4px] text-[14px]'>Логотип</span>
										<Field
											{...register('teamLogo', {
												required: true
											})}
											id='teamLogo'
											label='Логотип'
											placeholder='Логотип'
											extra='mb-[4px]'
											type='file'
											onChange={convertTeamLogo}
											className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
										/>
									</div>
									<div className='input__wrapper'>
										<span className='mb-[4px] text-[14px]'>Заявка на чемпионат 24/25</span>
										<Field
											{...register('application', {
												required: true
											})}
											id='application'
											label='Заявка на чемпионат 24/25'
											placeholder='Заявка на чемпионат 24/25'
											extra='mb-[4px]'
											type='file'
											onChange={convertStatement}
											className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
										/>
										<a className='text-blue-1 text-[12px]' href={item.application}
										   download={item.teamName + 'паспорт5.pdf'}>загрузить</a>
									</div>
									<div className='input__wrapper'>
										<span className='mb-[4px] text-[14px]'>Ведомость ознакомления с регламентом</span>
										<Field
											{...register('statement', {
												required: true
											})}
											id='statement'
											label='Ведомость ознакомления с регламентом'
											placeholder='Ведомость ознакомления с регламентом'
											extra='mb-[4px]'
											type='file'
											onChange={convertStatement}
											className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
										/>
										<a className='text-blue-1 text-[12px]' href={item.statement}
										   download={item.teamName + 'паспорт5.pdf'}>загрузить</a>
									</div>
									<Button
										type='submit'
										className='w-full mt-2 p-2.5 flex-1 rounded-md outline-none border ring-offset-2 ring-indigo-600 text-white bg-blue-1 rounded-md hover:bg-blue-3 transition duration-200 ease-in-out transform -translate-x-1/12 focus:ring-2 mb-4'
									>
										{existsId ? 'Обновить' : 'Создать'}
									</Button>
								</form>
							</motion.div>
						)}
					</div>
				</th>
				<th className='px-6 py-4'>
					<div>
						<button
							onClick={() => deleteAdminTeam()}
							className=''
						>
							<Trash size={16} />
						</button>
					</div>
				</th>
			</tr>
		)
	} else {
		
		const onSubmit: SubmitHandler<TypeTeamFormState> = data => {
			// @ts-ignore
			const { id, typeOfTeam, ...rest } = data
			const dto = { ...rest, typeOfTeam: typeOfTeam }
			// @ts-ignore
			if (teamLogo.base64textString === ''){
				data.teamLogo = item.teamLogo
				dto.teamLogo = item.teamLogo
			}else{
				data.teamLogo = teamLogo.base64textString;
				dto.teamLogo = teamLogo.base64textString;
			}
			
			if (application.base64textString === ''){
				dto.application = item.application
				data.application = item.application
			}else{
				dto.application= application.base64textString;
				data.application = application.base64textString;
			}
			
			if (statement.base64textString === ''){
				dto.statement= item.statement
				data.statement= item.statement
			}else{
				dto.statement = statement.base64textString;
				data.statement = statement.base64textString;
			}
			
			
			
			updateTeam({
				id,
				data: dto
			})
			
			console.log(data)
			console.log(dto)
			
			reset({
				teamName: '',
				id: undefined,
				teamLogo: '',
				teamType:'',
				statement: '',
				application:''
			})
			setOpen(!open)
		}
		
		return (
			<tr className='bg-white border pb-4 pt-4'>
				<th className='px-6 py-4 border-r'><Image src={item.teamLogo} width={70}
				                                          height={70} alt={item.teamName} /></th>
				<th className='px-6 py-4 border-r'>{item.teamName}</th>
				<th className='px-6 py-4 border-r'><Link className='text-blue-1 text-[14px]' key={item.id}
				                                         href={`http://localhost:3000/i/team/${item.id}`}>Посмотреть команду
					полностью</Link></th>
				<th className='px-6 py-4 border-r'>
					<div>
						<div className=''>
							<button className='text-blue-1 text-[14px]' onClick={teamChange}>
								Анкета команды
							</button>
						</div>
						{open && (
							<motion.div variants={list}
							            initial={'clozed'}
							            animate={'opened'}
							            className='absolute pt-[15px] pl-[15px] right-0 top-0 flex flex-col gap-2 text-3xl items-start h-100% bg-white text-black-1 w-5/12 z-[200] border-l-[2px]'>
								<button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={teamChangeClick}>
									<motion.div variants={top} animate={open ? 'opened' : 'clozed'}
									            className='w-10 h-1 bg-blue-500 rounded origin-left'></motion.div>
									<motion.div variants={center} animate={open ? 'opened' : 'clozed'}
									            className='w-10 h-1 bg-blue-500 rounded'>
									</motion.div>
									<motion.div variants={bottom} animate={open ? 'opened' : 'clozed'}
									            className='w-10 h-1 bg-blue-500 rounded origin-left'></motion.div>
								</button>
								<form
									onSubmit={handleSubmit(onSubmit)}
									className='text-black-1 w-5/6'
								>
									<h3 className='text-[18px]'>Основная информация</h3>
									<Field
										{...register('teamName', {
											required: true
										})}
										id='teamName'
										label='Название команды'
										placeholder='Название команды'
										extra='mb-4 mt-4'
										className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
									/>
									<Field
										{...register('teamType', {
											required: true
										})}
										id='teamType'
										label='Округ команды'
										placeholder='Округ команды'
										extra='mb-4 mt-4'
										className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
									/>
									<h3 className='text-[18px] mb-4'>Документы</h3>
									<div className='input__wrapper'>
										<span className='mb-[4px] text-[14px]'>Логотип</span>
										<Field
											{...register('teamLogo', {
												required: true
											})}
											id='teamLogo'
											label='Логотип'
											placeholder='Логотип'
											extra='mb-[4px]'
											type='file'
											onChange={convertTeamLogo}
											className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
										/>
									
									</div>
									<div className='input__wrapper'>
										<span className='mb-[4px] text-[14px]'>Заявка на чемпионат 24/25</span>
										<Field
											{...register('application', {
												required: true
											})}
											id='application'
											label='Заявка на чемпионат 24/25'
											placeholder='Заявка на чемпионат 24/25'
											extra='mb-[4px]'
											type='file'
											onChange={convertApplication}
											className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
										/>
										<a className='text-blue-1 text-[12px]' href={item.application}
										   download={item.teamName + 'Заявка на чемпионат 24/25'}>загрузить</a>
									</div>
									<div className='input__wrapper'>
										<span className='mb-[4px] text-[14px]'>Ведомость ознакомления с регламентом</span>
										<Field
											{...register('statement', {
												required: true
											})}
											id='statement'
											label='Ведомость ознакомления с регламентом'
											placeholder='Ведомость ознакомления с регламентом'
											extra='mb-[4px]'
											type='file'
											onChange={convertStatement}
											className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
										/>
										<a className='text-blue-1 text-[12px]' href={item.statement}
										   download={item.teamName + 'Заявка на чемпионат 24/25'}>загрузить</a>
									</div>
									<Button
										type='submit'
										className='w-full mt-2 p-2.5 flex-1 rounded-md outline-none border ring-offset-2 ring-indigo-600 text-white bg-blue-1 rounded-md hover:bg-blue-3 transition duration-200 ease-in-out transform -translate-x-1/12 focus:ring-2 mb-4'
									>
										{existsId ? 'Обновить' : 'Создать'}
									</Button>
								</form>
							</motion.div>
						)}
					</div>
				</th>
			</tr>
		)
	}
	
	
}
