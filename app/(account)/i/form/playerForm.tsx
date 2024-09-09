import { motion } from 'framer-motion'
import { useState } from 'react'
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'

import { Button } from '../../../../components/buttons/Button'
import { SingleSelect } from '../../../../components/SingleSelect'
import { convertToBase64 } from '../../../../hooks/convertToBase64'
import { useProfile } from '../../../../hooks/useProfile'
import { useUser } from '../../../../hooks/useUser'


import type { TypePlayerFormState } from '../../../../types/player'
import { Field } from '../../../../components/Fields/Field'
import { usePlayer } from '../hooks/usePlayer'
import { Status, TYPES } from './TYPES.data'
import { useCreateAdminPlayer, useCreatePlayer } from './useCreatePlayer'


export function PlayerForm() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const [secondPasport, setSecondPasport] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	const [fivePasport, setFivePasport] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	const [schoolDocument, setSchoolDocument] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	const [terminationOfTheContract, setTerminationOfTheContract] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	const [policy, setPolicy] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	const [snils, setSnils] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	const [insurance, setInsurance] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	const [consentToParticipate, setConsentToParticipate] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	const [ConsentData, setConsentData] = useState({
		base64textString: '',
		imageName: '',
		showImage: false,
	});
	const { items, setItems, isLoading } = useUser()
	
	
	
	const convertSecondPasport = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setSecondPasport({
				// @ts-ignore
				base64textString: reader.result
			});
		};
		
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	};
	const convertFivePasport = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setFivePasport({
				// @ts-ignore
				base64textString: reader.result
			});
		};
		
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	};
	const convertSchoolDocument = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setSchoolDocument({
				// @ts-ignore
				base64textString: reader.result
			});
		};
		
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	};
	const convertTerminationOfTheContract = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setTerminationOfTheContract({
				// @ts-ignore
				base64textString: reader.result
			});
		};
		
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	};
	const convertPolicy = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setPolicy({
				// @ts-ignore
				base64textString: reader.result
			});
		};
		
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	};
	const convertSnils = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setSnils({
				// @ts-ignore
				base64textString: reader.result
			});
		};
		
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	};
	const convertInsurance = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setInsurance({
				// @ts-ignore
				base64textString: reader.result
			});
		};
		
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	};
	const convertConsentToParticipate = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setConsentToParticipate({
				// @ts-ignore
				base64textString: reader.result
			});
		};
		
		reader.onerror = (error) => {
			console.log('Error: ', error);
		};
	};
	const convertConsentData = (event) => {
		const file = event.target.files[0];
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			// @ts-ignore
			setConsentData({
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
		useFormContext<TypePlayerFormState>()
	
	const existsId = watch('id')
	
	const { data } = useProfile()
	
	if (data?.userRole === 'admin'){
		const { createAdminPlayer, isPending } = useCreateAdminPlayer()
		const onSubmit: SubmitHandler<TypePlayerFormState> = data => {
			const { id, typeOfPlayer, ...rest } = data
			const dto = { ...rest, typeOfPlayer:typeOfPlayer}
			// @ts-ignore
			dto.pasportSecond = secondPasport.base64textString;
			dto.pasportFive = fivePasport.base64textString;
			dto.schoolDocument = schoolDocument.base64textString;
			dto.terminationOfTheContract = terminationOfTheContract.base64textString;
			dto.policy = policy.base64textString;
			dto.snils = snils.base64textString;
			dto.insurance = insurance.base64textString;
			dto.consentToParticipate = consentToParticipate.base64textString;
			dto.ConsentData = ConsentData.base64textString;
			for (const item of items){
				if (item.email === dto.user_id){
					dto.user_id = item.id
				}
			}
			
			console.log(dto)
			
			createAdminPlayer(dto)
			
			
			reset({
				name: '',
				id: undefined,
				surname: '',
				patronymic: '',
				dateOfBirth: '',
				role: '',
				pasport: '',
				grip: '',
				gameNumber: '',
				height: '',
				weight: '',
				lastTeamName: '',
				sportSchool: '',
				typeOfPlayer: '',
				school: '',
				number: '',
				mail: '',
				pasportFive: '',
				pasportSecond: '',
				schoolDocument: '',
				terminationOfTheContract: '',
				insurance: '',
				snils: '',
				policy: '',
				consentToParticipate: '',
				ConsentData: '',
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
								{...register('name', {
									required: true
								})}
								id='name'
								label='Имя'
								placeholder='Имя'
								extra='mb-4 mt-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							<Field
								{...register('surname', {
									required: true
								})}
								id='surname'
								label='Фамилия'
								placeholder='Фамилия'
								extra='mb-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							<Field
								{...register('patronymic', {
									required: true
								})}
								id='patronymic'
								label='Отчество'
								placeholder='Отчество'
								extra='mb-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							<Field
								{...register('dateOfBirth', {
									required: true
								})}
								id='dateOfBirth'
								label='Дата рождения'
								placeholder='Дата рождения'
								extra='mb-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							<Field
								{...register('pasport', {
									required: true
								})}
								id='pasport'
								label='Серия и номер'
								placeholder='Серия и номер'
								extra='mb-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							<Field
								{...register('role', {
									required: true
								})}
								id='role'
								label='Амплуа'
								placeholder='Амплуа'
								extra='mb-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							<div className='flex  w-full flex-row'>
								<Field
									{...register('grip', {
										required: true
									})}
									id='grip'
									label='Хват'
									placeholder='Хват'
									extra='mb-4'
									className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
								/>
								<Field
									{...register('gameNumber', {
										required: true
									})}
									id='gameNumber'
									label='Игровой номер'
									placeholder='Игровой номер'
									extra='mb-4'
									className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
								/>
							</div>
							<div className='flex items-center justify-center w-full flex-row'>
								<Field
									{...register('height', {
										required: true
									})}
									id='height'
									label='Рост'
									placeholder='Рост'
									extra='mb-4'
									className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
								/>
								<Field
									{...register('weight', {
										required: true
									})}
									id='weight'
									label='Вес'
									placeholder='Вес'
									extra='mb-4'
									className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
								/>
							</div>
							<Field
								{...register('lastTeamName', {
									required: true
								})}
								id='lastTeamName'
								label='Последняя команда'
								placeholder='Последняя команда'
								extra='mb-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							<Field
								{...register('sportSchool', {
									required: true
								})}
								id='sportSchool'
								label='Спортивная школа'
								placeholder='Вес'
								extra='mb-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							<div>
								<Controller
									control={control}
									name='typeOfPlayer'
									render={({ field: { value, onChange } }) => (
										<SingleSelect
											data={TYPES.map(item => ({
												value: item
											}))}
											onChange={onChange}
											value={value || TYPES[TYPES.length - 1]}
											isColorSelect
										/>
									)}
								/>
							</div>
							<Field
								{...register('school', {
									required: true
								})}
								id='school'
								label='Школа/ВУЗ'
								placeholder='Школа/ВУЗ'
								extra='mb-4 mt-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							
							<h3 className='text-[18px] mb-4'>Контактная информация</h3>
							
							<Field
								{...register('number', {
									required: true
								})}
								id='number'
								label='Номер телефона'
								placeholder='Номер телефона'
								extra='mb-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							<Field
								{...register('mail', {
									required: true
								})}
								id='mail'
								label='Email'
								placeholder='Email'
								extra='mb-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
							/>
							<h3 className='text-[18px] mb-4'>Документы</h3>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>2-3 страница
								паспорта</span>
								<Field
									{...register('pasportSecond', {
										required: true
									})}
									id='pasportSecond'
									label='2-3 страница паспорта'
									placeholder='2-3 страница паспорта'
									extra='mb-[4px]'
									type='file'
									onChange={convertSecondPasport}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>5 страница
								паспорта</span>
								<Field
									{...register('pasportFive', {
										required: true
									})}
									id='pasportFibe'
									label='5 страница паспорта'
									placeholder='Email'
									extra='mb-[4px]'
									type='file'
									onChange={convertFivePasport}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Документы из
							школы</span>
								<Field
									{...register('schoolDocument', {
										required: true
									})}
									id='schoolDocument'
									label='Документы из школы'
									placeholder='Документы из школы'
									extra='mb-[4px]'
									type='file'
									onChange={convertSchoolDocument}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Растоженный проф.
							контракт</span>
								<Field
									{...register('terminationOfTheContract', {
										required: true
									})}
									id='terminationOfTheContract'
									label='Растоженный проф. контракт:'
									placeholder='Растоженный проф. контракт:'
									extra='mb-[4px]'
									type='file'
									onChange={convertTerminationOfTheContract}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Страховка</span>
								<Field
									{...register('insurance', {
										required: true
									})}
									id='insurance'
									label='Страховка'
									placeholder='Страховка'
									extra='mb-[4px]'
									type='file'
									onChange={convertInsurance}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>ПОЛИС</span>
								<Field
									{...register('policy', {
										required: true
									})}
									id='policy'
									label='ПОЛИС'
									placeholder='ПОЛИС'
									extra='mb-[4px]'
									type='file'
									onChange={convertPolicy}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Снилс</span>
								<Field
									{...register('snils', {
										required: true
									})}
									id='snils'
									label='Снилс'
									placeholder='Снилс'
									extra='mb-[4px]'
									type='file'
									onChange={convertSnils}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Согласие на
							участие</span>
								<Field
									{...register('consentToParticipate', {
										required: true
									})}
									id='consentToParticipate'
									label='согласие на  участие'
									placeholder='согласие на  участие'
									extra='mb-[4px]'
									type='file'
									onChange={convertConsentToParticipate}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Согласие на обработку персональных данных</span>
								<Field
									{...register('ConsentData', {
										required: true
									})}
									id='ConsentData'
									label='Согласие на обработку персональных данных'
									placeholder='Согласие на обработку персональных данных'
									extra='mb-[4px]'
									type='file'
									onChange={convertConsentData}
									className=' text-sm text-[8px] file:p-[0px]
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
							<Field
								{...register('status', {
									required: true
								})}
								id='grip'
								label='Статус'
								placeholder='Статус'
								extra='mb-4'
								className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
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
		const { createPlayer, isPending } = useCreatePlayer()
		const onSubmit: SubmitHandler<TypePlayerFormState> = data => {
			const { id, typeOfPlayer, ...rest } = data
			const dto = { ...rest, typeOfPlayer: typeOfPlayer }
			// @ts-ignore
			dto.pasportSecond = secondPasport.base64textString
			dto.pasportFive = fivePasport.base64textString
			dto.schoolDocument = schoolDocument.base64textString;
			dto.terminationOfTheContract = terminationOfTheContract.base64textString;
			dto.policy = policy.base64textString;
			dto.snils = snils.base64textString;
			dto.insurance = insurance.base64textString;
			dto.consentToParticipate = consentToParticipate.base64textString;
			dto.ConsentData = ConsentData.base64textString;
			
			
			createPlayer(dto)
			
			
			reset({
				name: '',
				id: undefined,
				surname: '',
				patronymic: '',
				dateOfBirth: '',
				role: '',
				pasport: '',
				grip: '',
				gameNumber: '',
				height: '',
				weight: '',
				lastTeamName: '',
				sportSchool: '',
				typeOfPlayer: '',
				school: '',
				number: '',
				mail: '',
				pasportFive: '',
				pasportSecond: '',
				schoolDocument: '',
				terminationOfTheContract: '',
				insurance: '',
				snils: '',
				policy: '',
				consentToParticipate: '',
				ConsentData: '',
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
								{...register('name', {
									required: true
								})}
								id='name'
								label='Имя'
								placeholder='Имя'
								extra='mb-4 mt-4'
								className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							<Field
								{...register('surname', {
									required: true,
								})}
								id='surname'
								label='Фамилия'
								placeholder='Фамилия'
								extra='mb-4'
								className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							<Field
								{...register('patronymic', {
									required: false
								})}
								id='patronymic'
								label='Отчество'
								placeholder='Отчество'
								extra='mb-4'
								className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							<Field
								{...register('dateOfBirth', {
									required: true,
								})}
								id='dateOfBirth'
								label='Дата рождения'
								placeholder='Дата рождения'
								extra='mb-4'
								className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							<Field
								{...register('pasport', {
									required: true
								})}
								id='pasport'
								label='Серия и номер'
								placeholder='Серия и номер'
								extra='mb-4'
								className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							<Field
								{...register('role', {
									required: true,
								})}
								id='role'
								label='Амплуа'
								placeholder='Амплуа'
								extra='mb-4'
								className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							<div className="flex  w-full flex-row">
								<Field
									{...register('grip', {
										required: false
									})}
									id='grip'
									label='Хват'
									placeholder='Хват'
									extra='mb-4'
									className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
								<Field
									{...register('gameNumber', {
										required: true,
									})}
									id='gameNumber'
									label='Игровой номер'
									placeholder='Игровой номер'
									extra='mb-4'
									className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>
							<div className="flex items-center justify-center w-full flex-row">
								<Field
									{...register('height', {
										required: false
									})}
									id='height'
									label='Рост'
									placeholder='Рост'
									extra='mb-4'
									className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
								<Field
									{...register('weight', {
										required: false
									})}
									id='weight'
									label='Вес'
									placeholder='Вес'
									extra='mb-4'
									className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
							</div>
							<Field
								{...register('lastTeamName', {
									required: false
								})}
								id='lastTeamName'
								label='Последняя команда'
								placeholder='Последняя команда'
								extra='mb-4'
								className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							<Field
								{...register('sportSchool', {
									required: true,
								})}
								id='sportSchool'
								label='Спортивная школа'
								placeholder='Вес'
								extra='mb-4'
								className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							<div>
								<Controller
									control={control}
									name='typeOfPlayer'
									render={({ field: { value, onChange } }) => (
										<SingleSelect
											data={TYPES.map(item => ({
												value: item
											}))}
											onChange={onChange}
											value={value || TYPES[TYPES.length - 1]}
											isColorSelect
										/>
									)}
								/>
							</div>
							<Field
								{...register('school', {
									required: true,
								})}
								id='school'
								label='Школа/ВУЗ'
								placeholder='Школа/ВУЗ'
								extra='mb-4 mt-4'
								className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							
							<h3 className='text-[18px] mb-4'>Контактная информация</h3>
							
							<Field
								{...register('number', {
									required: true
								})}
								id='number'
								label='Номер телефона'
								placeholder='Номер телефона'
								extra='mb-4'
								className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							<Field
								{...register('mail', {
									required: true,
								})}
								id='mail'
								label='Email'
								placeholder='Email'
								extra='mb-4'
								className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							<h3 className='text-[18px] mb-4'>Документы</h3>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>2-3 страница
								паспорта</span>
								<Field
									{...register('pasportSecond', {
										required: true
									})}
									id='pasportSecond'
									label='2-3 страница паспорта'
									placeholder='2-3 страница паспорта'
									extra='mb-[4px]'
									type='file'
									onChange={convertSecondPasport}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>5 страница
								паспорта</span>
								<Field
									{...register('pasportFive', {
										required: true
									})}
									id='pasportFibe'
									label='5 страница паспорта'
									placeholder='Email'
									extra='mb-[4px]'
									type='file'
									onChange={convertFivePasport}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Документы из
							школы</span>
								<Field
									{...register('schoolDocument', {
										required: false
									})}
									id='schoolDocument'
									label='Документы из школы'
									placeholder='Документы из школы'
									extra='mb-[4px]'
									type='file'
									onChange={convertSchoolDocument}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Растоженный проф.
							контракт</span>
								<Field
									{...register('terminationOfTheContract', {
										required: false
									})}
									id='terminationOfTheContract'
									label='Растоженный проф. контракт:'
									placeholder='Растоженный проф. контракт:'
									extra='mb-[4px]'
									type='file'
									onChange={convertTerminationOfTheContract}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Страховка</span>
								<Field
									{...register('insurance', {
										required: true
									})}
									id='insurance'
									label='Страховка'
									placeholder='Страховка'
									extra='mb-[4px]'
									type='file'
									onChange={convertInsurance}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>ПОЛИС</span>
								<Field
									{...register('policy', {
										required: true
									})}
									id='policy'
									label='ПОЛИС'
									placeholder='ПОЛИС'
									extra='mb-[4px]'
									type='file'
									onChange={convertPolicy}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Снилс</span>
								<Field
									{...register('snils', {
										required: true
									})}
									id='snils'
									label='Снилс'
									placeholder='Снилс'
									extra='mb-[4px]'
									type='file'
									onChange={convertSnils}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Согласие на
							участие</span>
								<Field
									{...register('consentToParticipate', {
										required: true
									})}
									id='consentToParticipate'
									label='согласие на  участие'
									placeholder='согласие на  участие'
									extra='mb-[4px]'
									type='file'
									onChange={convertConsentToParticipate}
									className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
								/>
							</div>
							<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>Согласие на обработку персональных данных</span>
								<Field
									{...register('ConsentData', {
										required: true
									})}
									id='ConsentData'
									label='Согласие на обработку персональных данных'
									placeholder='Согласие на обработку персональных данных'
									type='file'
									onChange={convertConsentData}
									className=' text-sm text-[8px] file:p-[0px]
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
