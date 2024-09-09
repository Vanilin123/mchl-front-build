'use client'

import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '../../../components/buttons/Button'
import { Field } from '../../../components/Fields/Field'


import { IAuthForm } from '../../../types/auth.types'


import { authService } from '../../../services/auth.service'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push('/i')
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className='flex min-h-screen'>
			<form
				className='w-1/4 m-auto shadow bg-sidebar items-center flex flex-col rounded-xl p-layout p-[25px]'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Link className='mb-[20px]' href='/'>
					<Image src={'/logo.png'} width={64} height={64} alt='логотип' />
				</Link>

				<Field
					id='email'
					label='Введите емейл'
					placeholder='Введите эмейл'
					type='email'
					extra='mb-4'
					className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
					{...register('email', {
						required: 'Email is required!'
					})}
				/>

				<Field
					id='password'
					label='Введите пароль '
					placeholder='Введите пароль '
					type='password'
					className=' border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:focus:ring-blue-500 dark:focus:border-blue-500'
					{...register('password', {
						required: 'Password is required!'
					})}
					extra='mb-6'
				/>

				<div className='flex items-center gap-5 justify-center'>
					<Button className='w-full mt-2 p-2.5 flex-1 rounded-md outline-none border ring-offset-2 ring-indigo-600 text-white bg-blue-1 rounded-md hover:bg-blue-3 transition duration-200 ease-in-out transform -translate-x-1/12 focus:ring-2 mb-4' onClick={() => setIsLoginForm(true)}>Логин</Button>
					<Button className='w-full mt-2 p-2.5 flex-1 rounded-md outline-none border ring-offset-2 ring-indigo-600 text-white bg-blue-1 rounded-md hover:bg-blue-3 transition duration-200 ease-in-out transform -translate-x-1/12 focus:ring-2 mb-4' onClick={() => setIsLoginForm(false)}>Регистрация</Button>
				</div>
			</form>
		</div>
	)
}
