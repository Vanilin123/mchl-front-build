import cn from 'clsx'
import { X } from 'lucide-react'

import { Badge } from '../components/Badge'

import { useOutside } from '../hooks/useOutside'

export interface IOption {
	value: string
}

interface ISingleSelect {
	data: IOption[]
	onChange: (value: string) => void
	value: string
	isColorSelect?: boolean
}

export function SingleSelect({
	data,
	onChange,
	value,
	isColorSelect
}: ISingleSelect) {
	const { isShow, setIsShow, ref } = useOutside(false)
	const getValue = () => data.find(item => item.value === value)?.value

	return (
		<div
			className={cn('relative min-w-36 text-black-1', {
				'w-max': isColorSelect
			})}
			ref={ref}
		>
			<button
				onClick={e => {
					e.preventDefault()
					setIsShow(!isShow)
				}}
			>
				{getValue() ? (
					<Badge
						variant={value}
						className='capitalize'
					>
						{getValue()}
					</Badge>
				) : (
					<Badge>Click for select</Badge>
				)}
			</button>
			{value && (
				<button
					className='absolute bottom-0 right-0 opacity-30 hover:opacity-100 transition-opacity'
					onClick={e => {
						e.preventDefault()
						onChange('')
					}}
				>
					<X size={14} />
				</button>
			)}
			{isShow && (
				<div
					className={cn(
						'absolute w-full p-2.5 bottom-[35px] right-0 slide bg-white border-[1px] border-black-1 rounded'
					)}
					
				>
					{data.map(item => (
						<button
							key={item.value}
							onClick={e => {
								e.preventDefault()
								onChange(item.value)
								setIsShow(false)
							}}
							className=' mb-4 last:mb-0  border-b-[2px]'
						>
							<Badge variant={item.value}>{item.value}</Badge>
						</button>
					))}
				</div>
			)}
		</div>
	)
}
