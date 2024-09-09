import { axiosClassic } from '@/api/axios'


class PartnersServices {
	private BASE_URL = '/partners'

	async getPartners() {
		const response = await axiosClassic.get(this.BASE_URL)
		return response
	}

	async createPartners(data) {
		const response = await axiosClassic.post(this.BASE_URL, data)
		return response
	}

	async updatePartners(id, data) {
		const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deletePartners(id) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const partnersService = new PartnersServices()
