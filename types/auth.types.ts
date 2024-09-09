export interface IAuthForm {
	email: string
	password: string
	userRole: string
}

export interface IUser {
	id: number
	email: string
	userRole: string
}

export interface IAuthResponse {
	accessToken: string
	userRole: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
