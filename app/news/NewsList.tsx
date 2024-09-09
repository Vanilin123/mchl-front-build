
import { Loader } from 'lucide-react'
import { useProfile } from '../../hooks/useProfile'
import type { IProfileResponse } from '../../services/user.service'

import { useNews} from './hooks/useNews'
import { News } from './news.block'


export function NewsList() {
	const { items, isLoading } = useNews()
	const { data } = useProfile()
	console.log(data)
	console.log(items)
	return (
		<div className='form__list w-full'>
				<div className='block__info'>
						{items?.length ? (
							items?.map(item => (
								<News
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
