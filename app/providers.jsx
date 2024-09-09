'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {  useState } from 'react'

export function Providers({ children }) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return (
		<QueryClientProvider client={client}>
			{children}
		</QueryClientProvider>
	)
}
