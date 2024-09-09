import { axiosClassic } from '../api/axios'


class DocumentsService {
	 BASE_URL = '/document'

	async getDocuments() {
		const response = await axiosClassic.get(this.BASE_URL)
		return response
	}

	async createDocuments(data) {
		const response = await axiosClassic.post(this.BASE_URL, data)
		return response
	}

	async updateDocuments(id, data) {
		const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteDocuments(id) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const documentsService = new DocumentsService()
