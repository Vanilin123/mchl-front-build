'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import React, { Component } from "react";
import Slider from "react-slick";
import { useCalendar } from '../../app/(site)/calendar/hooks/useCalendar'
import { News } from '../../app/(site)/news/news.block'

function PauseOnHover() {
	const { items, isLoading } = useCalendar()
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
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
		<div className="container">
			<div className="slider-container mt-[10px] mb-[10px]">
				<Slider {...settings}>
					{items?.length ? (
						items?.map(item => (
							<div className='p-[25px]'>
								<div className='p-[20px] border-[2px] flex item-center flex-col justify-center'>
									<div className='flex flex-row justify-between items-center'>
										<div className='flex flex-row items-center'>
											<Image src={item.logoTeamOne} alt={item.teamOne} width={80} height={80} />
											<p className='text-[28px] ml-[30px]'>{item.resultTeamOne}</p>
										</div>
										<p className='text-[28px]'>-</p>
										<div className='flex flex-row items-center'>
											<p className='text-[28px] mr-[30px]'>{item.resultTeamSecond}</p>
											<Image src={item.logoTeamSecond} alt={item.teamSecond} width={80} height={80} />
										</div>
									</div>
									<div className='flex item-center justify-center'>
										{item.dateOfGame}
									</div>
								</div>
							</div>
						))
					) : (
						<div></div>
					)}
				</Slider>
			</div>
		</div>
	
	);
}

export default PauseOnHover;
