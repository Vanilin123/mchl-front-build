'use client'



import { BroadcastsList } from './mainFile'
import { Providers } from './providers'
import Footer from './../components/footer/footer'
import PauseOnHover from './../components/games/slider'
import Header from './../components/header/header'
import Partners from './../components/partners/partners'
import Link from 'next/link'
import React from 'react'
import { FormProvider, useForm } from "react-hook-form"








export function MainPage() {
	const methods = useForm()
	
	return(
		<Providers>
			<FormProvider {...methods}>
				<>
					<Header/>
					<main>
						<PauseOnHover />
						<section className='mb-[100px]'>
							<div className="container">
								<h2 className="sm:text-[48px] text-[24px] sm:mb-[20px] mb-[20px]">
									Новости
								</h2>
								<BroadcastsList/>
							</div>
						</section>
						<Partners />
					</main>
					<Footer />
				</>
			</FormProvider>
		</Providers>
	)
}
