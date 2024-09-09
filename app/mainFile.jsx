'use client'
import Image from 'next/image'
import { useNews } from '../app/news/hooks/useNews'
import Link from 'next/link'
import React from 'react'





export function BroadcastsList() {
	const { items, isLoading } = useNews()
	
	let news = []
	if (items?.length > 0){
		for(let i =0; i<items?.length; i++) {
			if (i<5){
				news?.push(items[i])
			}
		}
		}
	let arr = []
	if (items?.length > 0){
		for(let i =0; i<items?.length; i++) {
			if (i<1){
				arr?.push(items[i])
			}
		}
	}
	
	console.log(news)
	
	return (
		<div className='flex gap-2 items-center flex-row justify-between'>
			<div>
				{news.map((link) => (
					<div key={link.id} className='mb-[10px] text-black-1'>
						<p>{link.title}</p>
					</div>))}
				<Link href='/news'>читать дальше</Link>
			</div>
			
				{arr.map((link) => (
					<div className="w-[760px] h-[500px] bg-gray-300 sm:block hidden">
						<Image src={link.picture} alt={link.title} width={760} height={500}/>
					</div>))}
					
				</div>)
				}

