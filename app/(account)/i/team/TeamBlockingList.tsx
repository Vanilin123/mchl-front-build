'use client'


import Loader from '../../../../components/Loader/Loader'
import { useProfile } from '../../../../hooks/useProfile'
import { TeamForm } from './form/teamForm'
import { Team } from './Team'
import styles from './TimeBlocking.module.scss'

import { useAllTeam, useTeam } from './hooks/useTeam'

export function TeamBlockingList() {
	const { data } = useProfile()
	const { itemsAllTeam } = useAllTeam()
	const { items, setItems, isLoading } = useTeam()
	console.log(itemsAllTeam)
	if (data?.userRole === 'admin') {
		return (
			<div className='flex-row flex'>
				<div className='ml-5 mt-5 w-[95%]'>
					<h2 className='sm:text-[48px] text-[24px] sm:mb-[20px] mb-[20px]'>Команда</h2>
					<table className='w-full  text-gray-500 rounded-2xl'>
						<thead className='text-xs text-white bg-blue-1 rounded-2xl'>
						<th className='px-6 py-4'>Лого</th>
						<th className='px-6 py-4'>Название команды</th>
						<th className='px-6 py-4'>Команда</th>
						<th className='px-6 py-4'>Анкета</th>
						<th className='px-6 py-4'>Удалить</th>
						</thead>
						<tbody>
						{itemsAllTeam?.length ? (
							itemsAllTeam?.map(item => (
								<Team
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
				<TeamForm />
			</div>
		)
	} else if (data?.userRole === 'manager') {
		
		return (
			<div className='flex-row flex'>
				<div className='ml-5 mt-5 w-[95%]'>
					<h2 className='sm:text-[48px] text-[24px] sm:mb-[20px] mb-[20px]'>Команда</h2>
					<table className='w-full  text-gray-500 rounded-2xl'>
						<thead className='text-xs text-white bg-blue-1 rounded-2xl'>
						<th className='px-6 py-4'>Лого</th>
						<th className='px-6 py-4'>Название команды</th>
						<th className='px-6 py-4'>Команда</th>
						<th className='px-6 py-4'>Анкета</th>
						</thead>
						<tbody>
						{items?.length ? (
							items?.map(item => (
								<Team
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
				<TeamForm />
			</div>)}
	else{
		return 	<div className='ml-5 mt-5 w-[95%]'>Доступ отсутствует, ожидайте или обратитесь к администратору</div>
	}
}
