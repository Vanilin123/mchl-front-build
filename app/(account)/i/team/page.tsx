import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '../../../../constants/seo.constants'

import { TeamBlocking } from './TeamBlocking'

export const metadata: Metadata = {
	title: 'Time blocking',
	...NO_INDEX_PAGE
}

export default function TeamPage() {
	return (
		<div>
			<TeamBlocking />
		</div>
	)
}
