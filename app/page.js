'use client'


import { MainPage } from '../app/broadcasts'
import Footer from './../components/footer/footer'
import PauseOnHover from './../components/games/slider'
import Header from '.././components/header/header'
import Partners from './../components/partners/partners'
import Link from 'next/link'
import React from 'react'

const links = [
  {url:'/',title:'"Команда «А» побеждает в напряженном матче со счетом 4:1"'},
  {url:'/about',title:'«Золотая шайба»: Россия вновь побеждает на чемпионате мира по хоккею!'},
  {url:'/portfolio',title:' «Новая звезда»: молодой талант покоряет НХЛ'},
  {url:'/contacts',title:' «Тренер года»: интервью с лучшим наставником сезона'},
]


export default function Home() {
  return (
    <MainPage/>
  );
}
