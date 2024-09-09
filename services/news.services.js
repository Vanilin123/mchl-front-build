import { axiosClassic } from '../api/axios'


class NewsService {
	BASE_URL = '/news'

	async getNews() {
		const response = await axiosClassic.get(this.BASE_URL)
		return response
	}

	async createNews(data) {
		const response = await axiosClassic.post(this.BASE_URL, data)
		return response
	}

	async updateNews(id, data) {
		const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteNews(id) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const newsService = new NewsService()
