import { Edit, Loader, Radius, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useFormContext } from 'react-hook-form'
import { iface } from 'ts-interface-checker'
import { Button } from '../../components/buttons/Button'
import { Field } from '../../components/Fields/Field'
import { useProfile } from '../../hooks/useProfile'
import type { IProfileResponse } from '../../services/user.service'

import type {
	NewsResponse,
	TypeNews
} from '../../types/news.types'
import { useCreateNews } from './form/useCreateNews'
import { useUpdateNews } from './form/useUpdateNews'


import { useDeleteNews } from './hooks/useDeleteNews'

export function News({ item,data }: { item: NewsResponse,data:IProfileResponse}) {
	const [showModal, setShowModal] = useState(false);
	const { reset,watch, handleSubmit,register } = useFormContext<TypeNews>()
	const { deleteNews, isDeletePending } = useDeleteNews(item.id)
	const [imageData, setImageData] = useState({
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
	
	
	const existsId = watch('id')
	
	const { updateNews } = useUpdateNews(existsId)
	
	const onSubmit: SubmitHandler<TypeNews> = data => {
		const { id, ...rest } = data
		const dto = { ...rest }
		
		
		if (id) {
			// @ts-ignore
			updateNews({
				id,
				data: dto
			})
		}
		
		
		console.log(data)
		console.log(imageData.base64textString)
		
		reset({
			title: '',
			text: '',
			id: undefined,
		})
	}
	if (data?.userRole === 'admin') return (
		<div
			className='flex flex-row justify-between md:h-[186px] h-[107px] border-b-2 pb-2.5 border-t-2 pt-2.5 hover:border-blue-3 transition-all duration-200 text-grey-1 hover:text-blue-3 mb-[15px]'>
			<Link className='  md:h-[166px] h-[87px]' key={item.id} href={`http://localhost:3000/news/${item.id}`}>
				<div className='flex flex-row'>
					<div className='mr-4'>
						<Image className='md:min-w-[240px] md:h-[166px] h-[87px] min-w-[125px]' src={item.picture} width={239}
						       height={166} alt={item.title} />
					</div>
					<div className='flex flex-col h-[166px]'>
						<h3 className='md:mb-[20px] mb-[5px] text-black-1 md:text-[20px] text-[12px]'>{item.title}</h3>
						<p
							className='text-ellipsis overflow-hidden md:h-[115px] h-[50px] md:text-[15px] text-[10px]'>{item.text}</p>
					</div>
				</div>
			</Link>
			<div className='buttons_trash'>
				<button
					onClick={() => {
						reset({
							id: item.id,
							title: item.title,
							picture: item.picture
						})
						setShowModal(true)
					}}
					className='opacity-50 transition-opacity hover:opacity-100 mr-2'
				>
					<Edit size={25} />
				</button>
				<button
					onClick={() => deleteNews()}
					className='opacity-50 transition-opacity hover:opacity-100'
				>
					{isDeletePending ? <Loader size={25} /> : <Trash size={25} />}
				</button>
			</div>
			{showModal ? (
				<>
					<div className='fixed inset-0 z-10 overflow-y-auto bg-zinc-300 bg-opacity-40'>
						<div
							className='fixed inset-0 w-full h-full bg-black opacity-40'
							onClick={() => setShowModal(false)}
						></div>
						<div className='flex items-center min-h-screen px-4 py-8'>
							<div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg'>
								<div>
									<div>
										<div className='flex items-center justify-between'>
											<h3 className='text-lg font-medium text-gray-800'>
												Создать документ
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
												       label='Заголовок новости'
												       placeholder='Заголовок новости'
												       extra='mb-4'
												       className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
												/>
												
												<Field {...register('text', { required: true })}
												       id='text'
												       label='Текст новости'
												       placeholder='Текст новости'
												       extra='mb-4'
												       className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
												/>
												
												<div className='input__wrapper'>
													<span className='mb-[4px] text-[14px]'>Картинка</span>
													<Field
														{...register('picture', {
															required: true
														})}
														id='pasportSecond'
														label='Картинка'
														placeholder='Картинка'
														type='file'
														onChange={convertSecondPasport}
														className=' text-sm text-[8px] file:p-[0]
                file:border-0 file:text-[14px]
                file:bg-transparent file:text-blue-1'
													/>
													</div>
													<Button
														type='submit'
														className='w-full mt-2 p-2.5 flex-1 rounded-md outline-none border ring-offset-2 ring-indigo-600 text-white bg-blue-1 rounded-md hover:bg-blue-3 transition duration-200 ease-in-out transform -translate-x-1/12 focus:ring-2'
													>
														Редактировать
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
	)
	return (
		<div
			className='flex flex-row justify-between md:h-[186px] h-[107px] border-b-2 pb-2.5 border-t-2 pt-2.5 hover:border-blue-3 transition-all duration-200 text-grey-1 hover:text-blue-3 mb-[15px]'>
			<div className='flex flex-row'>
				<Link className='  md:h-[166px] h-[87px]' key={item.id} href={`http://localhost:3000/news/${item.id}`}>
					<div className='mr-4'>
						<Image className='md:min-w-[240px] md:h-[166px] h-[87px] min-w-[125px]' src={item.picture} width={239}
						       height={166} alt={item.title} />
					</div>
					<div className='flex flex-col h-[166px]'>
						<h3 className='md:mb-[20px] mb-[5px] text-black-1 md:text-[20px] text-[12px]'>{item.title}</h3>
						<p
							className='text-ellipsis overflow-hidden md:h-[115px] h-[50px] md:text-[15px] text-[10px]'>{item.text}</p>
					</div>
					</Link>
				</div>
			</div>
	)
}
