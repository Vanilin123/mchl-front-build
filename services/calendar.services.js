import { axiosClassic } from '../api/axios'


class CalendarService {
	BASE_URL = '/gamescalendar'

	async getCalendar() {
		const response = await axiosClassic.get(this.BASE_URL)
		return response
	}

	async createCalendar(data) {
		const response = await axiosClassic.post(this.BASE_URL, data)
		return response
	}

	async updateCalendar(id, data) {
		const response = await axiosClassic.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteCalendar(id) {
		const response = await axiosClassic.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const calendarService = new CalendarService()
