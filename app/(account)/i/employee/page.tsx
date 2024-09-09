import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '../../../../constants/seo.constants'

import { EmployeeBlocking } from './EmployeeBlocking'

export const metadata: Metadata = {
	title: 'Time blocking',
	...NO_INDEX_PAGE
}

export default function EmployeePage() {
	return (
		<div>
			<EmployeeBlocking />
		</div>
	)
}
