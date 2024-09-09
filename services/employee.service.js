import { axiosClassic, axiosWithAuth } from '../api/axios'


class EmployeeService {
	BASE_URL = '/user/employes'
	ADMIN_URL = '/employes'

	async getEmployee() {
		const response = await axiosWithAuth.get(this.BASE_URL)
		return response
	}
	
	async getAllEmployee() {
		const response = await axiosClassic.get(this.ADMIN_URL)
		return response
	}

	async createEmployee(data) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async updateEmployee(id, data) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteEmployee(id) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
	
	async createAdminEmployee(data) {
		const response = await axiosWithAuth.post(this.ADMIN_URL, data)
		return response
	}
	
	async updateAdminEmployee(id, data) {
		const response = await axiosClassic.put(`${this.ADMIN_URL}/${id}`, data)
		return response
	}
	
	async deleteAdminEmployee(id) {
		const response = await axiosClassic.delete(`${this.ADMIN_URL}/${id}`)
		return response
	}
}

export const employeeService = new EmployeeService()
