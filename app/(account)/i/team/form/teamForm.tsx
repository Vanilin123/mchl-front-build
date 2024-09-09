import { motion } from 'framer-motion'
import { useState } from 'react'
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'

import { Button } from '../../../../../components/buttons/Button'
import { SingleSelect } from '../../../../../components/SingleSelect'
import { convertToBase64 } from '../../../../../hooks/convertToBase64'
import { useProfile } from '../../../../../hooks/useProfile'
import { useUser } from '../../../../../hooks/useUser'


import type { TypeTeamFormState } from '../../../../../types/team'
import { Field } from '../../../../../components/Fields/Field'
import { useTeam } from '../hooks/useTeam'
import { useCreateAdminTeam, useCreateTeam } from './useCreateTeam'


export function TeamForm() {
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
	
	const { items, setItems, isLoading } = useUser()
	
	
	
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
	
	const { data } = useProfile()
	
	if (data?.userRole === 'admin'){
		const { createAdminTeam, isPending } = useCreateAdminTeam()
		const onSubmit: SubmitHandler<TypeTeamFormState> = data => {
			const { id, ...rest } = data
			const dto = { ...rest}
			// @ts-ignore
			dto.teamLogo = teamLogo.base64textString;
			dto.statement = statement.base64textString;
			dto.application = application.base64textString;
			for (const item of items){
				if (item.email === dto.user_id){
					dto.user_id = item.id
				}
			}
			
			console.log(dto)
			
			createAdminTeam(dto)
			
			
			reset({
				teamName: '',
				id: undefined,
				teamType: '',
				teamLogo: '',
				statement: '',
				application:''
			})
		}
		
		// @ts-ignore
		// @ts-ignore
		return (
			<div>
				<div className='flex items-end justify-end mt-[10px] mr-[10px]'>
					<button className='w-10 h-8 flex flex-col justify-between z-50' onClick={() => setOpen(!open)}>
						<motion.div variants={top} animate={open ? 'opened' : 'clozed'}
						            className='w-10 h-1 bg-blue-500 rounded origin-left'></motion.div>
						<motion.div variants={center} animate={open ? 'opened' : 'clozed'}
						            className='w-10 h-1 bg-blue-500 rounded'>
						</motion.div>
						<motion.div variants={bottom} animate={open ? 'opened' : 'clozed'}
						            className='w-10 h-1 bg-blue-500 rounded origin-left'></motion.div>
					</button>
				</div>
				{open && (
					<motion.div variants={list}
					            initial={'clozed'}
					            animate={'opened'}
					            className='absolute pt-[15px] pl-[15px] top-0 right-0 flex flex-col gap-2 text-3xl items-start w-1/3 h-100% bg-white text-black-1 z-40 border-l-[2px]'>
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
							</div>
							<Field
								{...register('user_id', {
									required: true
								})}
								id='user_id'
								label='Email пользователя'
								placeholder='email пользователя'
								extra='mb-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							<Button
								type='submit'
								disabled={isPending}
								className='w-full mt-2 p-2.5 flex-1 rounded-md outline-none border ring-offset-2 ring-indigo-600 text-white bg-blue-1 rounded-md hover:bg-blue-3 transition duration-200 ease-in-out transform -translate-x-1/12 focus:ring-2 mb-4'
							>
								{existsId ? 'Обновить' : 'Создать'}
							</Button>
						</form>
					</motion.div>
				)}
			</div>
		)
	} else {
		const { createTeam, isPending } = useCreateTeam()
		const onSubmit: SubmitHandler<TypeTeamFormState> = data => {
			const { id, ...rest } = data
			const dto = { ...rest }
			// @ts-ignore
			dto.teamLogo = teamLogo.base64textString;
			dto.statement = statement.base64textString;
			dto.application = application.base64textString;
			
			
			createTeam(dto)
			
			
			reset({
				teamName: '',
				id: undefined,
				teamLogo: '',
				teamType:'',
				statement: '',
				application:''
			})
		}
		
		// @ts-ignore
		// @ts-ignore
		return (
			<div>
				<div className='flex items-end justify-end mt-[10px] mr-[10px]'>
					<button className='w-10 h-8 flex flex-col justify-between z-50' onClick={() => setOpen(!open)}>
						<motion.div variants={top} animate={open ? 'opened' : 'clozed'}
						            className='w-10 h-1 bg-blue-500 rounded origin-left'></motion.div>
						<motion.div variants={center} animate={open ? 'opened' : 'clozed'}
						            className='w-10 h-1 bg-blue-500 rounded'>
						</motion.div>
						<motion.div variants={bottom} animate={open ? 'opened' : 'clozed'}
						            className='w-10 h-1 bg-blue-500 rounded origin-left'></motion.div>
					</button>
				</div>
				{open && (
					<motion.div variants={list}
					            initial={'clozed'}
					            animate={'opened'}
					            className='absolute pt-[15px] pl-[15px] top-0 right-0 flex flex-col gap-2 text-3xl items-start w-1/3 h-100% bg-white text-black-1 z-40 border-l-[2px]'>
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
							</div>
						
							<Button
								type='submit'
								disabled={isPending}
								className="w-full mt-2 p-2.5 flex-1 rounded-md outline-none border ring-offset-2 ring-indigo-600 text-white bg-blue-1 rounded-md hover:bg-blue-3 transition duration-200 ease-in-out transform -translate-x-1/12 focus:ring-2 mb-4"
							>
								{existsId ? 'Обновить' : 'Создать'}
							</Button>
						</form>
					</motion.div>
				)}
			</div>
		)
	}
}
