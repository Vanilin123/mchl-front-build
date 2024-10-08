
import { Documents } from '../../app/documents/documents'
import React from 'react'

const links = [
	{url:'/',title:'документ 1'},
	{url:'/about',title:'документ 2'},
	{url:'/portfolio',title:'документ 2'},
	{url:'/contacts',title:'Документ 3'},
]


export default function Page() {
	return (
	
		<section className='mb-[100px]'>
			<div className="container">
				<h2 className="sm:text-[48px] text-[24px] sm:mb-[20px] mb-[20px]">
					Документы
				</h2>
				<div className='flex gap-2 flex-col justify-between'>
					<Documents/>
				</div>
			</div>
		</section>
		
	)
}
