'use client'



import { BroadcastsList } from '../../app/teams/BroadcastsList'
import { FormProvider, useForm } from "react-hook-form"








export function Broadcasts() {
	const methods = useForm()
	
	return( <div>
			<FormProvider {...methods}>
				<div className="FormBlocking">
					<div className="form-filter">
						<BroadcastsList/>
					</div>
				</div>
			</FormProvider>
		
		</div>
	)
}
