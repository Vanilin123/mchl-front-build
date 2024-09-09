import { axiosClassic } from '../api/axios'


class BroadcastsService {
	BASE_URL = '/broadcasts'

	async getBroadcasts() {
		const response = await axiosClassic.get(this.BASE_URL)
		return response
	}

	async createBroadcasts(data) {
		const response = await axiosClassic.post(this.BASE_URL, data)
		return response
	}

	async updateBroadcasts(id, data) {
		const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteBroadcasts(id) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const broadcastsService = new BroadcastsService()
