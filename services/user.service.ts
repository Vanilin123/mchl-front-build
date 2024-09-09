import { IUser, TypeUserForm } from '../types/auth.types'

import { axiosClassic, axiosWithAuth } from '../api/axios'

export interface IProfileResponse {
	id: number
	email: string
	userRole: string
}

class UserService {
	private BASE_URL = '/user/profile'
	ADMIN_URL = '/users'
	async getProfile() {
		const response = await axiosWithAuth.get<IProfileResponse>(this.BASE_URL)
		return response.data
	}

	async update(data: TypeUserForm) {
		const response = await axiosWithAuth.put(this.BASE_URL, data)
		return response.data
	}
	
	async getAllUser() {
		const response = await axiosClassic.get(this.ADMIN_URL)
		return response
	}
	
	async updateAdminUser(id, data) {
		const response = await axiosClassic.put(`${this.ADMIN_URL}/${id}`, data)
		return response
	}
	
	async deleteAdminUser(id) {
		const response = await axiosClassic.delete(`${this.ADMIN_URL}/${id}`)
		return response
	}
}

export const userService = new UserService()
