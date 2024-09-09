'use client'


import { CalendarList } from '../../../app/(site)/calendar/CalendarList'
import { FormProvider, useForm } from "react-hook-form"
import { CalendaringForm } from "./form/calendarForm"







export function Calendar() {
	const methods = useForm()
	
	return( <div>
			<FormProvider {...methods}>
				<div className="FormBlocking">
					<div className="form-filter">
						<CalendaringForm/>
						<CalendarList/>
					</div>
				</div>
			</FormProvider>
		
		</div>
	)
}
