'use client'


import Loader from '../../../../components/Loader/Loader'
import { useProfile } from '../../../../hooks/useProfile'
import { EmployeeForm } from './form/employeeForm'
import { Employee } from './Employee'
import styles from './TimeBlocking.module.scss'

import { useAllEmployee, useEmployee } from './hooks/useEmployee'

export function EmployeeBlockingList() {
	const { data } = useProfile()
	const { itemsAllEmployee } = useAllEmployee()
	const { itemsEmployee, setItems, isLoading } = useEmployee()
	if (data?.userRole === 'admin') {
		return (
			<div className='flex-row flex'>
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
						{itemsAllEmployee?.length ? (
							itemsAllEmployee?.map(item => (
								<Employee
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
				<EmployeeForm />
			</div>
		)
	} else if (data?.userRole === 'manager') {
		
		return (
			<div className='flex-row flex'>
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
								<Employee
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
				<EmployeeForm />
			</div>)}
	else{
		return 	<div className='ml-5 mt-5 w-[95%]'>Доступ отсутствует, ожидайте или обратитесь к администратору</div>
	}
}
