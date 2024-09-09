import type { IBase } from './root.types'

export interface IUserResponse extends IBase {
	email:string
	password:string
	userRole:string
}

export type TypeUserFormState = Partial<
	Omit<IUserResponse, 'createdAt' | 'updatedAt'>
>
