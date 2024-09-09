import { motion } from 'framer-motion'
import { Edit, GripVertical, Loader, Trash } from 'lucide-react'
import { useState } from 'react'
import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'
import { Button } from '../../../../components/buttons/Button'
import { Field } from '../../../../components/Fields/Field'
import { SingleSelect } from '../../../../components/SingleSelect'
import type { IProfileResponse } from '../../../../services/user.service'

import type {
	IEmployeeResponse,
	TypeEmployeeFormState
} from '../../../../types/employee'
import { Status, TYPES } from './form/TYPES.data'
import { useCreateEmployee } from './form/useCreateEmployee'
import { useUpdateAdminEmployee, useUpdateEmployee } from './form/useUpdateEmployee'


import { useDeleteAdminEmployee, useDeleteEmployee } from './hooks/useDeleteEmployee'

export function Employee({ item, data }: { item: IEmployeeResponse  ,data:IProfileResponse}) {
	
	
	const { deleteEmployee, isDeletePending } = useDeleteEmployee(item.id)

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
	
	function employeeChange() {
		setOpen(!open)
		reset({
			id: item.id,
			name: item.name,
			surname: item.surname,
			patronymic: item.patronymic,
			dateOfBirth: item.dateOfBirth,
			pasport: item.pasport,
			school: item.school,
			number: item.number,
			mail: item.mail,
			pasportFive: item.pasportFive,
			pasportSecond: item.pasportSecond,
			snils: item.snils,
			policy: item.policy,
		})
	}
	
	function employeeChangeClick() {
		setOpen(!open)
		reset({
			name: '',
			id: undefined,
			surname: '',
			patronymic: '',
			dateOfBirth: '',
			pasport: '',
			school: '',
			number: '',
			mail: '',
			pasportFive: '',
			pasportSecond: '',
			snils: '',
			policy: '',
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
		useFormContext<TypeEmployeeFormState>()
	
	const existsId = watch('id')
	
	const { deleteAdminEmployee } = useDeleteAdminEmployee(item.id)
	const { updateAllEmployee } = useUpdateAdminEmployee(existsId)
	const { updateEmployee } = useUpdateEmployee(existsId)
	if (data?.userRole === 'admin'){
		
		const onSubmit: SubmitHandler<TypeEmployeeFormState> = data => {
			// @ts-ignore
			const { id, typeOfEmployee, ...rest } = data
			const dto = { ...rest, typeOfEmployee:typeOfEmployee}
			// @ts-ignore
			if (secondPasport.base64textString === ''){
				data.pasportSecond = item.pasportSecond
				dto.pasportSecond = item.pasportSecond
			}else{
				data.pasportSecond = secondPasport.base64textString;
				dto.pasportSecond = secondPasport.base64textString;
			}
			
			if (fivePasport.base64textString === ''){
				dto.pasportFive = item.pasportFive
				data.pasportFive = item.pasportFive
			}else{
				dto.pasportFive = fivePasport.base64textString;
				data.pasportFive = fivePasport.base64textString;
			}
			
			if (snils.base64textString === ''){
				dto.snils= item.snils
				data.snils= item.snils
			}else{
				dto.snils = snils.base64textString;
				data.snils = snils.base64textString;
			}
			
			if (policy.base64textString === ''){
				dto.policy = item.policy
				data.policy = item.policy
			}else{
				dto.policy = policy.base64textString;
				data.policy = policy.base64textString;
			}
			
			
			
			updateAllEmployee({
				id,
				data: dto,
			})
			
			
			reset({
				name: '',
				id: undefined,
				surname: '',
				patronymic: '',
				dateOfBirth: '',
				pasport: '',
				school: '',
				number: '',
				mail: '',
				pasportFive: '',
				pasportSecond: '',
				snils: '',
				policy: '',
			})
			setOpen(!open)
		}
		
		return (
			<tr className="bg-white border pb-4 pt-4">
				<th className="px-6 py-4 border-r">{item.name}</th>
				<th className="px-6 py-4 border-r">{item.surname}</th>
				<th className="px-6 py-4 border-r">{item.patronymic}</th>
				<th className="px-6 py-4 border-r">{item.dateOfBirth}</th>
				<th className="px-6 py-4 border-r">{item.status}</th>
				<th className="px-6 py-4 border-r">
					<div>
						<div className=''>
							<button className='text-blue-1 text-[14px]' onClick={employeeChange}>
								Анкета игрока
							</button>
						</div>
						{open && (
							<motion.div variants={list}
							            initial={'clozed'}
							            animate={'opened'}
							            className='absolute pt-[15px] pl-[15px] right-0 top-0 flex flex-col gap-2 text-3xl items-start h-100% bg-white text-black-1 w-5/12 z-[200] border-l-[2px]'>
								<button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={employeeChangeClick}>
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
											required: false
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
										{...register('school', {
											required: false
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
									<div className='flex flex-row flex-wrap justify-between'>
										<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>2-3 страница
								паспорта</span>
											<Field
												{...register('pasportSecond', {
													required: false
												})}
												id='pasportSecond'
												label='2-3 страница паспорта'
												placeholder='2-3 страница паспорта'
												type='file'
												onChange={convertSecondPasport}
												className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
											/>
											<a className='text-blue-1 text-[12px]' href={item.pasportSecond}
											   download={item.surname + 'паспорт2_3.pdf'}>загрузить</a>
										</div>
										<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>5 страница
								паспорта</span>
											<Field
												{...register('pasportFive', {
													required: false
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
											<a className='text-blue-1 text-[12px]' href={item.pasportFive}
											   download={item.surname + 'паспорт5.pdf'}>загрузить</a>
										</div>
										<div className='input__wrapper'>
											<span className='mb-[4px] text-[14px]'>ПОЛИС</span>
											<Field
												{...register('policy', {
													required: false
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
											<a className='text-blue-1 text-[12px]' href={item.policy}
											   download={item.surname + 'ПОЛИС.pdf'}>загрузить</a>
										</div>
										<div className='input__wrapper'>
											<span className='mb-[4px] text-[14px]'>Снилс</span>
											<Field
												{...register('snils', {
													required: false
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
											<a className='text-blue-1 text-[12px]' href={item.snils}
											   download={item.surname + 'снилс.pdf'}>загрузить</a>
										</div>
									</div>
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
										className='w-full mt-2 p-2.5 flex-1 outline-none border ring-offset-2 ring-indigo-600 text-white bg-blue-1 rounded-md hover:bg-blue-3 transition duration-200 ease-in-out transform -translate-x-1/12 focus:ring-2 mb-4'
									
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
							onClick={() => deleteAdminEmployee()}
							className=''
						>
							 <Trash size={16} />
						</button>
					</div>
				</th>
			</tr>
		)
	} else {
		
		const onSubmit: SubmitHandler<TypeEmployeeFormState> = data => {
			// @ts-ignore
			const { id, typeOfEmployee, ...rest } = data
			const dto = { ...rest, typeOfEmployee:typeOfEmployee}
			// @ts-ignore
			if (secondPasport.base64textString === ''){
				data.pasportSecond = item.pasportSecond
				dto.pasportSecond = item.pasportSecond
			}else{
				data.pasportSecond = secondPasport.base64textString;
				dto.pasportSecond = secondPasport.base64textString;
			}
			
			if (fivePasport.base64textString === ''){
				dto.pasportFive = item.pasportFive
				data.pasportFive = item.pasportFive
			}else{
				dto.pasportFive = fivePasport.base64textString;
				data.pasportFive = fivePasport.base64textString;
			}
			
			
			if (snils.base64textString === ''){
				dto.snils= item.snils
				data.snils= item.snils
			}else{
				dto.snils = snils.base64textString;
				data.snils = snils.base64textString;
			}
			
			if (policy.base64textString === ''){
				dto.policy = item.policy
				data.policy = item.policy
			}else{
				dto.policy = policy.base64textString;
				data.policy = policy.base64textString;
			}
			
			
			updateEmployee({
				id,
				data: dto,
			})
			
			console.log(data)
			console.log(dto)
			
			reset({
				name: '',
				id: undefined,
				surname: '',
				patronymic: '',
				dateOfBirth: '',
				pasport: '',
				school: '',
				number: '',
				mail: '',
				pasportFive: '',
				pasportSecond: '',
				snils: '',
				policy: ''
			})
			setOpen(!open)
		}
		
		return (
			<tr className="bg-white border pb-4 pt-4">
				<th className="px-6 py-4 border-r">{item.name}</th>
				<th className="px-6 py-4 border-r">{item.surname}</th>
				<th className="px-6 py-4 border-r">{item.patronymic}</th>
				<th className="px-6 py-4 border-r">{item.dateOfBirth}</th>
				<th className="px-6 py-4 border-r">{item.status}</th>
				<th className="px-6 py-4 border-r">
					<div>
						<div className=''>
							<button className='text-blue-1 text-[14px]' onClick={employeeChange}>
								Анкета игрока
							</button>
						</div>
						{open && (
							<motion.div variants={list}
							            initial={'clozed'}
							            animate={'opened'}
							            className='absolute pt-[15px] pl-[15px] right-0 top-0 flex flex-col gap-2 text-3xl items-start h-100% bg-white text-black-1 w-5/12 z-[200] border-l-[2px]'>
								<button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={employeeChangeClick}>
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
											required: false
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
										{...register('school', {
											required:false
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
									<div className='flex flex-row flex-wrap justify-between'>
										<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>2-3 страница
								паспорта</span>
											<Field
												{...register('pasportSecond', {
													required: false
												})}
												id='pasportSecond'
												label='2-3 страница паспорта'
												placeholder='2-3 страница паспорта'
												type='file'
												onChange={convertSecondPasport}
												className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
											/>
											<a className='text-blue-1 text-[12px]' href={item.pasportSecond}
											   download={item.surname + 'паспорт2_3.pdf'}>загрузить</a>
										</div>
										<div className='input__wrapper'>
								<span className='mb-[4px] text-[14px]'>5 страница
								паспорта</span>
											<Field
												{...register('pasportFive', {
													required:false
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
											<a className='text-blue-1 text-[12px]' href={item.pasportFive}
											   download={item.surname + 'паспорт5.pdf'}>загрузить</a>
										</div>
										<div className='input__wrapper'>
											<span className='mb-[4px] text-[14px]'>ПОЛИС</span>
											<Field
												{...register('policy', {
													required: false
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
											<a className='text-blue-1 text-[12px]' href={item.policy}
											   download={item.surname + 'ПОЛИС.pdf'}>загрузить</a>
										</div>
										<div className='input__wrapper'>
											<span className='mb-[4px] text-[14px]'>Снилс</span>
											<Field
												{...register('snils', {
													required: false
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
											<a className='text-blue-1 text-[12px]' href={item.snils}
											   download={item.surname + 'снилс.pdf'}>загрузить</a>
										</div>
										
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
