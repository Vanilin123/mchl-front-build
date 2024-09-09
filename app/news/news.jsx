'use client'


import { NewsList } from '../../app/news/NewsList'
import { FormProvider, useForm } from "react-hook-form"
import { NewsingForm } from "./form/newsForm"







export function News() {
	const methods = useForm()
	
	return( <div>
			<FormProvider {...methods}>
				<div className="FormBlocking">
					<div className="form-filter">
						<NewsingForm/>
						<NewsList/>
					</div>
				</div>
			</FormProvider>
		
		</div>
	)
}
