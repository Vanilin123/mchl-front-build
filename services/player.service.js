import { axiosClassic, axiosWithAuth } from '../api/axios'


class PlayerService {
	BASE_URL = '/user/players'
	ADMIN_URL = '/players'

	async getPlayer() {
		const response = await axiosWithAuth.get(this.BASE_URL)
		return response
	}
	
	async getAllPlayer() {
		const response = await axiosClassic.get(this.ADMIN_URL)
		return response
	}

	async createPlayer(data) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async updatePlayer(id, data) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deletePlayer(id) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
	
	async createAdminPlayer(data) {
		const response = await axiosWithAuth.post(this.ADMIN_URL, data)
		return response
	}
	
	async updateAdminPlayer(id, data) {
		const response = await axiosClassic.put(`${this.ADMIN_URL}/${id}`, data)
		return response
	}
	
	async deleteAdminPlayer(id) {
		const response = await axiosClassic.delete(`${this.ADMIN_URL}/${id}`)
		return response
	}
}

export const playerService = new PlayerService()
