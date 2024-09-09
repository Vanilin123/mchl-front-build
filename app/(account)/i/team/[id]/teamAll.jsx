'use client'
import { iface } from 'ts-interface-checker'
import { useProfile } from '../../../../../hooks/useProfile'
import { useAllPlayer, usePlayer } from '../../../../../app/(account)/i/hooks/usePlayer'
import { useAllTeam } from '../../../../../app/(account)/i/team/hooks/useTeam'
import { useAllEmployee, useEmployee } from '../../../../../app/(account)/i/employee/hooks/useEmployee'

import { Form, FormProvider, useForm } from 'react-hook-form'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import React from 'react'
import { UseEmp } from './useEmp'
import { Employee } from '../../employee/Employee'
import { UsePlay } from './usePlay'

export default function TeamAll() {
	const methods = useForm()
	const pathname = usePathname()
	const params = pathname.split('/')[3]
	const { itemsAllTeam, isLoading } = useAllTeam()
	const result = itemsAllTeam?.filter((word) => (word.id === params ));
	console.log(result)
	let news
	result?.map(item => (
		news = item
	))
	
	const { data } = useProfile()
	
	const { itemsAllEmployee } = useAllEmployee()
	const { itemsEmployee } = useEmployee()
	
	const { itemsAll } = useAllPlayer()
	const { items, setItems } = usePlayer()
	console.log(news?.userId)
	
	let palyers = []
	console.log(itemsAll)
	
	if (itemsAll?.length > 0){
		for(let i =0; i<itemsAll?.length; i++) {
			console.log(itemsAll[i]?.userId)
			if (itemsAll[i]?.userId === news?.userId) {
				palyers.push(itemsAll[i])
			}
		}
	}else{
		return console.log('нет')
	}
	
	let employee = []
	
	if(itemsAllEmployee?.length>0){
		for(let i =0; i<itemsAllEmployee?.length; i++){
			if(itemsAll[i]?.userId === news?.userId){
				employee.push(itemsAllEmployee[i])
			}
		}
	}else{
		return console.log('нет')
	}
	
	

	console.log(itemsAll)
	
	
	console.log(palyers)
	
	if (data?.userRole === 'admin') {
		return (
			<div className='flex-col flex'>
				<div className='ml-5 mt-5 w-[95%]'>
					<h2 className='sm:text-[48px] text-[24px] sm:mb-[20px] mb-[20px]'>Игроки</h2>
					<table className='w-full  text-gray-500 rounded-2xl'>
						<thead className='text-xs text-white bg-blue-1 rounded-2xl'>
						<th className='px-6 py-4'>Имя</th>
						<th className='px-6 py-4'>Фамилия</th>
						<th className='px-6 py-4'>Отчество</th>
						<th className='px-6 py-4'>Дата рождения</th>
						<th className='px-6 py-4'>Статус</th>
						<th className='px-6 py-4'>Анкета</th>
						<th className='px-6 py-4'>Удалить</th>
						</thead>
						<tbody>
						{palyers?.length ? (
							palyers?.map(item => (
								<UsePlay
									key={item.id}
									item={item}
									data={data}
								/>
							))
						) : (
							<td>Добавить первого игрока</td>
						)}
						</tbody>
					</table>
				</div>
				<div className='ml-5 mt-5 w-[95%]'>
					<h2 className='sm:text-[48px] text-[24px] sm:mb-[20px] mb-[20px]'>Персонал</h2>
					<table className='w-full  text-gray-500 rounded-2xl'>
						<thead className='text-xs text-white bg-blue-1 rounded-2xl'>
						<th className='px-6 py-4'>Имя</th>
						<th className='px-6 py-4'>Фамилия</th>
						<th className='px-6 py-4'>Отчество</th>
						<th className='px-6 py-4'>Дата рождения</th>
						<th className='px-6 py-4'>Статус</th>
						<th className='px-6 py-4'>Анкета</th>
						<th className='px-6 py-4'>Удалить</th>
						</thead>
						<tbody>
						{employee?.length ? (
							employee?.map(item => (
								<UseEmp
									key={item.id}
									item={item}
									data={data}
								/>
							))
						) : (
							<td>Добавить первого сотрудника</td>
						)}
						</tbody>
					</table>
				</div>
			</div>
		)
	} else if (data?.userRole === 'manager') {
		
		return (
			<div className='flex-col flex'>
				<div className='ml-5 mt-5 w-[95%]'>
					<h2 className='sm:text-[48px] text-[24px] sm:mb-[20px] mb-[20px]'>Игроки</h2>
					<table className='w-full  text-gray-500 rounded-2xl'>
						<thead className='text-xs text-white bg-blue-1 rounded-2xl'>
						<th className='px-6 py-4'>Имя</th>
						<th className='px-6 py-4'>Фамилия</th>
						<th className='px-6 py-4'>Отчество</th>
						<th className='px-6 py-4'>Дата рождения</th>
						<th className='px-6 py-4'>Статус</th>
						<th className='px-6 py-4'>Анкета</th>
						</thead>
						<tbody>
						{items?.length ? (
							items?.map(item => (
								<UsePlay
									key={item.id}
									item={item}
									data={data}
								/>
							))
						) : (
							<td>Добавить первого игрока</td>
						)}
						</tbody>
					</table>
				</div>
				<div className='ml-5 mt-5 w-[95%]'>
					<h2 className='sm:text-[48px] text-[24px] sm:mb-[20px] mb-[20px]'>Сотрудники</h2>
					<table className='w-full  text-gray-500 rounded-2xl'>
						<thead className='text-xs text-white bg-blue-1 rounded-2xl'>
						<th className='px-6 py-4'>Имя</th>
						<th className='px-6 py-4'>Фамилия</th>
						<th className='px-6 py-4'>Отчество</th>
						<th className='px-6 py-4'>Дата рождения</th>
						<th className='px-6 py-4'>Статус</th>
						<th className='px-6 py-4'>Анкета</th>
						</thead>
						<tbody>
						{itemsEmployee?.length ? (
							itemsEmployee?.map(item => (
								<UseEmp
									key={item.id}
									item={item}
									data={data}
								/>
							))
						) : (
							<td>Добавить первого сотрудника</td>
						)}
						</tbody>
					</table>
				</div>
			</div>)
	} else {
		return <div className='ml-5 mt-5 w-[95%]'>Доступ отсутствует, ожидайте или обратитесь к администратору</div>
	}
	
	
}
