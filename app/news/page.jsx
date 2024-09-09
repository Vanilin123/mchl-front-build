import { News } from '../news/news'
import React from 'react'

export default function NewsPage() {
	return (
		<section className="mb-[100px]">
			<div className="container">
				<h2 className="sm:text-[48px] text-[24px] sm:mb-[20px] mb-[20px]">
					Новости
				</h2>
				<div className='flex gap-2 items-center flex-row justify-between flex-wrap'>
				<News/>
				</div>
			</div>
		</section>
	)
}
