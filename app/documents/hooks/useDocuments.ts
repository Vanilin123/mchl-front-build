import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useEffect, useState } from 'react'
import type { DocumentsResponse } from '../../../types/documents.types'
import { documentsService } from '../../../services/documents.services'
import { useSearchParams } from 'next/navigation'



export const useDocuments = () => {

	const { data, isLoading } = useQuery({
		queryKey: ['documents'],
		queryFn: () => documentsService.getDocuments()
	})

	const [items, setItems] = useState<DocumentsResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, isLoading }
}
