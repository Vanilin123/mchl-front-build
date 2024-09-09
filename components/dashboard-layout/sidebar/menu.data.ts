import {
	CalendarRange,
	KanbanSquare,
	LayoutDashboard,
	Settings,
	Timer
} from 'lucide-react'


import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		link: '/i',
		name: 'Игроки'
	},
	{
		link: '/i/employee',
		name: 'Персонал'
	},
	{
		link: '/i/team',
		name: 'Команда'
	},
]