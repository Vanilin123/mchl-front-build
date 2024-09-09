import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '../../../constants/seo.constants'

import { PlayerBlocking } from './PlayerBlocking'

export const metadata: Metadata = {
	title: 'Time blocking',
	...NO_INDEX_PAGE
}

export default function TimeBlockingPage() {
	return (
		<div>
			<PlayerBlocking />
		</div>
	)
}
