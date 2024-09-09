
import { Loader } from 'lucide-react'
import Image from 'next/image'

import { useAllTeam} from './hooks/useBroadcasts'



export function BroadcastsList() {
	const { itemsAllTeam, isLoading } = useAllTeam()
	console.log(itemsAllTeam)
	let news = []
	if (itemsAllTeam?.length > 0){
		for(let i =0; i<itemsAllTeam?.length; i++) {
			console.log(itemsAllTeam[i])
				news?.push(itemsAllTeam[i])
			
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
	
	const groupByYear = groupBy("teamType");
	groupByYear(news);
	
	console.log(groupByYear(news))
	const broadcasts = groupByYear(news)
	
	
	
	return (
		<div className='form__list'>
				<div className='flex flex-col flex-wrap '>
						{Object.keys(broadcasts).map((key, index) => {
								return(
								<div key={key} className='mb-8'>
									<h4 className='text-[28px] text-blue-1 mb-4'>{key}</h4>
									<div className='flex flex-row flex-wrap flex-wrap justify-between'>
										{broadcasts[key]?.map((item) => (
											<div className='flex flex-col text-[22px] items-center gap-2'>
												<Image src={item.teamLogo} alt={item.teamName} width={160} height={160} />
													<h2>{item.teamName}</h2>
											</div>
										))}
									</div>
								</div>)
							})}
				</div>
		</div>
			
	)
}
