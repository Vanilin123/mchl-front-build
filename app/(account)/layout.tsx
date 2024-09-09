
import { Toaster } from 'sonner'


import { Providers } from '../providers'




export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
				<Providers>
					{children}

					<Toaster
						theme='dark'
						position='bottom-right'
						duration={1500}
					/>
				</Providers>
		
	)
}
