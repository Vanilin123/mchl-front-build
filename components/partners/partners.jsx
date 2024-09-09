'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Partners() {
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	return (
		<section className="mb-[80px]">
			<div className="container">
				<h2 className="sm:text-[48px] text-[24px] sm:mb-[60px] mb-[20px]">
					Партнеры
				</h2>
				<div>
					<Slider {...settings}>
						<div className='flex items-center justify-betwen'>
							<Link href='https://pnr360.ru/'>
								<Image src={'/logo-square (2).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://ld-sokolniki.ru/'>
								<Image src={'/Арена  сокольнкики красный  (3).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://pnr360.ru/'>
								<Image src={'/Step logo BW (4).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://fhmoscow.com/'>
								<Image src={'/ФХМ png (3).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://seversever.ru/'>
								<Image src={'/Group 56 (4).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://ipsumvitamin.ru/'>
								<Image src={'/Artboard 5 (2).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://www.bamard-sport.ru/'>
								<Image src={'/BAMARD-sport logo orange (1).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://moscow-sun.ru/'>
								<Image src={'/Moscow_Sun_logo-01 (3).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://fhmoscow.com/'>
								<Image src={'/NEW ENERGY (4).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://softlaw.ru/'>
								<Image src={'/Soft Law ждс (2).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://ledoviy-servis.ru/'>
								<Image src={'/Лого Ледовый Сервис Черный (4).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://pravo.ru/'>
								<Image src={'/Право (3).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://www.mosenergosbyt.ru/'>
								<Image src={'/МЭС (4).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://hclegends.ru/'>
								<Image src={'/logo (6).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://t.me/s/artskates'>
								<Image src={'/6844BBE5-5B0E-41E3-869F-9547DFF8106B (5).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://mger.ru/'>
								<Image src={'/Белая Молодая Гвардия  (2) (4).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://city-sightseeing.ru/'>
								<Image src={'/Сити-Сайтинг-_1_ (2).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://354group.com/'>
								<Image src={'/354byvasilchuki-_1_ (2).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://ruswatch.ru/'>
								<Image src={'/_РВ new в кривых (1)-1 (1).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
						<div className='flex items-center justify-betwen'>
							<Link href='https://mha.mossport.ru/'>
								<Image src={'/шп (4).png'} width={64} height={64} alt='логотип' />
							</Link>
						</div>
					</Slider>
				</div>
			</div>
		</section>
	)
}
