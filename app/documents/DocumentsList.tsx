
import { Loader } from 'lucide-react'
import { useProfile } from '../../hooks/useProfile'

import { useDocuments} from './hooks/useDocuments'
import { Documents } from './documents.block'


export function DocumentsList() {
	const { items, isLoading } = useDocuments()
	const { data } = useProfile()
	return (
		<div className='form__list'>
				<div className='block__info'>
						{items?.length ? (
							items?.map(item => (
								<Documents
									key={item.id}
									item={item}
									data={data}
								/>
							))
						) : (
							<div>Документы отсутствуют</div>
						)}
				</div>
		</div>
			
	)
}
