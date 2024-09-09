import { axiosClassic } from '@/api/axios'


class GamescalendarService {
	private BASE_URL = '/gamescalendar'

	async getGamescalendar() {
		const response = await axiosClassic.get(this.BASE_URL)
		return response
	}

	async createGamescalendar(data) {
		const response = await axiosClassic.post(this.BASE_URL, data)
		return response
	}

	async updateGamescalendar(id, data) {
		const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteGamescalendar(id) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const gamescalendarService = new GamescalendarService()
