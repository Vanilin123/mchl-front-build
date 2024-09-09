'use client'


import { DocumentsList } from '../../app/documents/DocumentsList'
import { FormProvider, useForm } from "react-hook-form"
import { DocumentsingForm } from "./form/documentsForm"







export function Documents() {
	const methods = useForm()
	
	return( <div>
			<FormProvider {...methods}>
				<div className="FormBlocking">
					<div className="form-filter">
						<DocumentsingForm/>
						<DocumentsList/>
					</div>
				</div>
			</FormProvider>
		
		</div>
	)
}
