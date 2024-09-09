'use client'

import { GanttChartSquare } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex bg-black-1 flex-col justify-between'>
			<div className='flex items-center justify-between flex-col w-full mb-8 mt-4'>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout'
				>
					<Image src={'/logo.png'} alt='Лого' width={64} height={64} />
				</Link>
				<div className='p-3 relative flex items-center justify-center justify-between flex-col'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
		</aside>
	)
}
