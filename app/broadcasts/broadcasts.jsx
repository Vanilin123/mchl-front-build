'use client'


import { BroadcastsList } from '../../app/broadcasts/BroadcastsList'
import { FormProvider, useForm } from "react-hook-form"
import { BroadcastsingForm } from "./form/broadcastsForm"







export function Broadcasts() {
	const methods = useForm()
	
	return( <div>
			<FormProvider {...methods}>
				<div className="FormBlocking">
					<div className="form-filter">
						<BroadcastsingForm/>
						<BroadcastsList/>
					</div>
				</div>
			</FormProvider>
		
		</div>
	)
}
