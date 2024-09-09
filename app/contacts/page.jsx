import React from 'react'

export default function Contacts() {
	return (
		<section className='mb-[100px]'>
			<div className="container">
				<h2 className="sm:text-[48px] text-[24px] sm:mb-[20px] mb-[20px]">
					Контакты
				</h2>
				<div className='flex gap-2 items-center flex-row flex-wrap'>
					<iframe className='c#FFFFFF; font-weight: bold;'
						src="https://yandex.ru/map-widget/v1/?um=constructor%3A923862dbc9c97078fc1d1eb9a1c166601eb1ce7a31e3b3a51bc955fca07083ee&amp;source=constructor"
						width="100%" height="400" frameBorder="0"></iframe>
					<div className='flex gap-2 items-center flex-col justify-between'>
						<a className='text-blue-1 hover:text-blue-3' href="mailto:info@shlmo.ru">Напишите нам</a>
					</div>
				</div>
			</div>
		</section>
	)
}
