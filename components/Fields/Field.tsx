import { forwardRef } from 'react'
import { ChangeEvent } from 'react'

interface InputFieldProps {
	id: string,
	label: string,
	extra?: string,
	placeholder: string,
	variant?: string,
	state?: 'error' | 'success',
	disabled?: boolean,
	type?: string,
	isNumber?: boolean,
	className?: string,
	onChange?: (event) => void,
	accept?: string,
	value?: string
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ label, id, extra, type, placeholder, state, disabled, isNumber, className, onChange, accept,value, ...rest },
		ref
	) => {
		// @ts-ignore
		// @ts-ignore
		return (
			<div className={`${extra}`}>
				
				<input
					ref={ref}
					disabled={disabled}
					type={type}
					id={id}
					placeholder={placeholder}
					className={className}
					onChange={onChange}
					accept={accept}
					value={value}
					onKeyDown={event => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault()
						}
					}}
					{...rest}
				/>
			</div>
		)
	}
)

Field.displayName = 'field'
