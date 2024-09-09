'use client'
import { useNews } from '../../../app/news/hooks/useNews'
import { Form, FormProvider, useForm } from 'react-hook-form'

import Image from 'next/image'
import { usePathname } from 'next/navigation'

import React from 'react'

export default function News() {
	const methods = useForm()
	const pathname = usePathname()
	const params = pathname.split('/')[2]
	const { items, isLoading } = useNews()
	const result = items?.filter((word) => (word.id === params ));
	console.log(result)
	let news
	result?.map(item => (
		news = item
	))
	console.log(news)
	
	return (
		<FormProvider{...methods}>
		<section className="mb-[100px]">
			<div className="container">
				<h2 className="sm:text-[48px] text-[24px] sm:mb-[20px] mb-[20px]">
					{news?.title}
				</h2>
				<div className='max-w mx-auto max-w-[1920px]'>
					<div className='flex justify-center items-center xl:flex-row flex-col-reverse'>
						<p className='xl:text-[18px] text-[14px] xl:mr-[15px] mr-0'>
							{news?.text}
						</p>
						<div className="md:shrink-0 xl:mb-0 mb-[15px]">
							<Image alt={news?.title} src={news?.picture} width={600} height={400} />
						</div>
					</div>
				</div>
			</div>
		</section>
			</FormProvider>
	)
}
