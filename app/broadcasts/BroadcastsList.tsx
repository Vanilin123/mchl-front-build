
import { Loader } from 'lucide-react'

import { useBroadcasts} from './hooks/useBroadcasts'
import { Broadcasts } from './broadcasts.block'


export function BroadcastsList() {
	const { items, isLoading } = useBroadcasts()
	console.log(items)
	let news = []
	if (items?.length > 0){
		for(let i =0; i<items?.length; i++) {
			console.log(items[i])
				news?.push(items[i])
			
		}
	}else{
		return console.log('нет')
	}
	
	
	
	function groupBy(key) {
		return function group(array) {
			return array.reduce((acc, obj) => {
				const property = obj[key];
				acc[property] = acc[property] || [];
				acc[property].push(obj);
				return acc;
			}, {});
		};
	}
	
	const groupByYear = groupBy("dateGame");
	groupByYear(news);
	
	console.log(groupByYear(news))
	const broadcasts = groupByYear(news)
	
	
	
	return (
		<div className='form__list'>
				<div className='flex flex-col flex-wrap'>
						{Object.keys(broadcasts).map((key, index) => {
								return(
								<div key={key} className='mb-4'>
									<h4 className='text-[22px] text-blue-1 mb-2'>{key}</h4>
									<div className='flex flex-row flex-wrap'>
										{broadcasts[key]?.map((item) => (
											<Broadcasts
												key={item.id}
												item={item}
											/>
										))}
									</div>
								</div>)
							})}
				</div>
		</div>
			
	)
}
