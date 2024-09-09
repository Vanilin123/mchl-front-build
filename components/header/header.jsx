'use client'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"
import "./header.css";
import {useState} from "react";

const links = [
	{url:'/news',title:'Новости'},
	{url:'/calendar',title:'Календарь'},
	{url:'/teams',title:'Команды'},
	{url:'/broadcasts',title:'Трансляции'},
	{url:'/documents',title:'Документы'},
	{url:'/about',title:'О нас'},
	{url:'/contacts',title:'Контакты'},
]


export default function Header() {
	const [open, setOpen] = useState(false);
	
	const top = {
		clozed:{
			rotate:0,
		},
		opened:{
			rotate: 45,
			backgroundColor: "rgb(225,225,225)",
		}
	}
	
	const center = {
		clozed:{
			opacity:1,
		},
		opened:{
			opacity: 0,
		}
	}
	
	const bottom = {
		clozed:{
			rotate:0,
		},
		opened:{
			rotate: -45,
			backgroundColor: "rgb(225,225,225)",
		}
	}
	
	
	const list = {
		clozed:{
			x:"100vw",
			transition:1
		},
		opened:{
			x:"0",
			transition:{
				staggerChildren:0.2
			}
		}
	}
	const listItems = {
		clozed:{
			x:-10,
			opacity:0
		},
		opened:{
			x:0,
			opacity:1
		}
	}
	
	const listSochial = {
		clozed:{
			x:-10,
			opacity:0,
		},
		opened:{
			x:0,
			opacity:1,
		}
	}
	
	return (
		<header className="header">
			<div className="header__banner">
			</div>
			<div className='bg-blue-1 pt-[11px] pb-[11px]'>
				<div className='container flex items-center flex-row justify-between'>
					<Link className='' href='/'>
						<Image src={'/logo.png'} width={64} height={64} />
					</Link>
					<div className='hidden md:flex items-center flex-row justify-between'>
						<nav>
							<ul className='text-white flex flex-row items-center justify-center'>
								<li className='md:mr-[10px] burger__header-items xl:mr-[40px]'>
									<Link href='/news'>Новости</Link>
								</li>
								<li className='md:mr-[10px] burger__header-items xl:mr-[40px]'>
									<Link href='/calendar'>Календарь</Link>
								</li>
								<li className='md:mr-[10px] burger__header-items xl:mr-[40px]'>
									<Link href='/teams'>Команды</Link>
								</li>
								<li className='md:mr-[10px] burger__header-items xl:mr-[40px]'>
									<Link href='/broadcasts'>Трансляции</Link>
								</li>
								<li className='md:mr-[10px] burger__header-items xl:mr-[40px]'>
									<Link href='/documents'>Документы</Link>
								</li>
								<li className='md:mr-[10px] burger__header-items xl:mr-[40px]'>
									<Link href='/about'>О нас</Link>
								</li>
								<li>
									<Link href='/contacts'>Контакты</Link>
								</li>
							</ul>
						</nav>
				</div>
					<div className='hidden md:flex items-center flex-row justify-between'>
						<Link className='md:mr-[10px] xl:mr-[30px]' href='/auth'>
							<svg width='38' height='38' viewBox='0 0 38 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path fill-rule='evenodd' clip-rule='evenodd'
								      d='M15 15C15 12.79 16.79 11 19 11C21.21 11 23 12.79 23 15C23 17.21 21.21 19 19 19C16.79 19 15 17.21 15 15ZM21.1 15C21.1 13.84 20.16 12.9 19 12.9C17.84 12.9 16.9 13.84 16.9 15C16.9 16.16 17.84 17.1 19 17.1C20.16 17.1 21.1 16.16 21.1 15Z'
								      fill='white' />
								<path fill-rule='evenodd' clip-rule='evenodd'
								      d='M11 24C11 21.34 16.33 20 19 20C21.67 20 27 21.34 27 24V27H11V24ZM25.1 24C25.1 23.36 21.97 21.9 19 21.9C16.03 21.9 12.9 23.36 12.9 24V25.1H25.1V24Z'
								      fill='white' />
								<path fill-rule='evenodd' clip-rule='evenodd'
								      d='M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19ZM36 19C36 28.3888 28.3888 36 19 36C9.61116 36 2 28.3888 2 19C2 9.61116 9.61116 2 19 2C28.3888 2 36 9.61116 36 19Z'
								      fill='white' />
							</svg>
						</Link>
						<div className='header__sotial flex items-center flex-row justify-between'>
							<Link href='https://t.me/s/shl_mo' className='header__sotial-item mr-[10px]'>
								<svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px' viewBox='0 0 32 32' fill='none'>
									<circle cx='16' cy='16' r='14' fill='#40B3E0' />
									<path
										d='M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z'
										fill='white' />
									<defs>
										<linearGradient id='paint0_linear_87_7225' x1='16' y1='2' x2='16' y2='30'
										                gradientUnits='userSpaceOnUse'>
											<stop stop-color='#37BBFE' />
											<stop offset='1' stop-color='#007DBB' />
										</linearGradient>
									</defs>
								</svg>
							</Link>
							<Link href='https://www.youtube.com/channel/UCxq7cpCS5HtQ4iTm1P6Xh5Q' className='header__sotial-item mr-[10px]'>
								<svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px' viewBox='0 0 16 16' fill='none'>
									<path fill='red'
									      d='M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z' />
									<path fill='#ffffff' d='M6.593 10.11l3.644-2.098-3.644-2.11v4.208z' />
								</svg>
							</Link>
							<Link href='https://vk.com/shlmo'>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='30px' height='30px'>
									<path fill='#2787f5'
									      d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z' />
									<path fill='#fff'
									      d='M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618 c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199 v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623 C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643 C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094 v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618 c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326 c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607 C32.223,24.393,35.607,19.642,35.937,18.041z' />
								</svg>
							</Link>
						</div>
						
					</div>
					<div className=' md:hidden'>
						<button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen(!open)}>
							<motion.div variants={top} animate={open ? 'opened' : 'clozed'}
							            className='w-10 h-1 bg-white rounded origin-left'></motion.div>
							<motion.div variants={center} animate={open ? 'opened' : 'clozed'}
							            className='w-10 h-1 bg-white rounded'></motion.div>
							<motion.div variants={bottom} animate={open ? 'opened' : 'clozed'}
							            className='w-10 h-1 bg-white rounded origin-left'></motion.div>
						</button>
					</div>
				</div>
				{open && (
					<motion.div variants={list}
					            initial={'clozed'}
					            animate={'opened'}
					            className='absolute top-0 left-0 flex justify-center flex-col gap-2 text-3xl items-center w-screen h-screen bg-white text-black-1 z-40'>
						{links.map((link) => (
							<motion.div variants={listItems} key={link.title}>
								<Link href={link.url} onClick={() => setOpen(!open)}>{link.title}</Link>
							</motion.div>))}
						<motion.div variants={listSochial} className='flex gap-2 items-center flex-row justify-between'>
							<div className='flex justify-center flex-col items-center'>
								<Link className='mb-10px' href='/auth'>
									<svg width='39' height='38' viewBox='0 0 39 38' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path fill-rule='evenodd' clip-rule='evenodd'
										      d='M15.5 15C15.5 12.79 17.29 11 19.5 11C21.71 11 23.5 12.79 23.5 15C23.5 17.21 21.71 19 19.5 19C17.29 19 15.5 17.21 15.5 15ZM21.6 15C21.6 13.84 20.66 12.9 19.5 12.9C18.34 12.9 17.4 13.84 17.4 15C17.4 16.16 18.34 17.1 19.5 17.1C20.66 17.1 21.6 16.16 21.6 15Z'
										      fill='#222222' />
										<path fill-rule='evenodd' clip-rule='evenodd'
										      d='M11.5 24C11.5 21.34 16.83 20 19.5 20C22.17 20 27.5 21.34 27.5 24V27H11.5V24ZM25.6 24C25.6 23.36 22.47 21.9 19.5 21.9C16.53 21.9 13.4 23.36 13.4 24V25.1H25.6V24Z'
										      fill='#222222' />
										<path fill-rule='evenodd' clip-rule='evenodd'
										      d='M38.5 19C38.5 29.4934 29.9934 38 19.5 38C9.00659 38 0.5 29.4934 0.5 19C0.5 8.50659 9.00659 0 19.5 0C29.9934 0 38.5 8.50659 38.5 19ZM36.5 19C36.5 28.3888 28.8888 36 19.5 36C10.1112 36 2.5 28.3888 2.5 19C2.5 9.61116 10.1112 2 19.5 2C28.8888 2 36.5 9.61116 36.5 19Z'
										      fill='#222222' />
									</svg>
								</Link>
								<div className='flex justify-center flex-row'>
									<Link href='https://t.me/s/shl_mo' className=' mr-[10px]'>
										<svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px' viewBox='0 0 32 32' fill='none'>
											<circle cx='16' cy='16' r='14' fill='#40B3E0' />
											<path
												d='M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z'
												fill='white' />
											<defs>
												<linearGradient id='paint0_linear_87_7225' x1='16' y1='2' x2='16' y2='30'
												                gradientUnits='userSpaceOnUse'>
													<stop stop-color='#37BBFE' />
													<stop offset='1' stop-color='#007DBB' />
												</linearGradient>
											</defs>
										</svg>
									</Link>
									<Link href='https://www.youtube.com/channel/UCxq7cpCS5HtQ4iTm1P6Xh5Q' className='mr-[10px]'>
										<svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px' viewBox='0 0 16 16' fill='none'>
											<path fill='red'
											      d='M14.712 4.633a1.754 1.754 0 00-1.234-1.234C12.382 3.11 8 3.11 8 3.11s-4.382 0-5.478.289c-.6.161-1.072.634-1.234 1.234C1 5.728 1 8 1 8s0 2.283.288 3.367c.162.6.635 1.073 1.234 1.234C3.618 12.89 8 12.89 8 12.89s4.382 0 5.478-.289a1.754 1.754 0 001.234-1.234C15 10.272 15 8 15 8s0-2.272-.288-3.367z' />
											<path fill='#ffffff' d='M6.593 10.11l3.644-2.098-3.644-2.11v4.208z' />
										</svg>
									</Link>
									<Link href='https://vk.com/shlmo'>
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='30px' height='30px'>
											<path fill='#2787f5'
											      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z" />
											<path fill="#fff"
											      d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618 c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199 v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623 C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643 C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094 v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618 c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326 c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607 C32.223,24.393,35.607,19.642,35.937,18.041z" />
										</svg>
									</Link>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			
			</div>
		</header>
	);
};