
import { Toaster } from 'sonner'
import Footer from '../../components/footer/footer'
import PauseOnHover from '../../components/games/slider'
import Header from '../../components/header/header'
import Partners from '../../components/partners/partners'


import { Providers } from '../providers'




export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Providers>
			<Header/>
			<main>
				<PauseOnHover/>
				{children}
				<Partners/>
			</main>
			<Footer/>
		</Providers>
		
	)
}
