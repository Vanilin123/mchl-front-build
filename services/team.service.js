import { axiosClassic, axiosWithAuth } from '../api/axios'


class TeamService {
	BASE_URL = '/user/team'
	ADMIN_URL = '/team'

	async getTeam() {
		const response = await axiosWithAuth.get(this.BASE_URL)
		return response
	}
	
	async getAllTeam() {
		const response = await axiosClassic.get(this.ADMIN_URL)
		return response
	}

	async createTeam(data) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async updateTeam(id, data) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteTeam(id) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
	
	async createAdminTeam(data) {
		const response = await axiosWithAuth.post(this.ADMIN_URL, data)
		return response
	}
	
	async updateAdminTeam(id, data) {
		const response = await axiosClassic.put(`${this.ADMIN_URL}/${id}`, data)
		return response
	}
	
	async deleteAdminTeam(id) {
		const response = await axiosClassic.delete(`${this.ADMIN_URL}/${id}`)
		return response
	}
}

export const teamService = new TeamService()
