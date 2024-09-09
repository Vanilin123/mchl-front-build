import type { IBase } from './root.types'

export interface IEmployeeResponse extends IBase {
	name:string
	surname:string
	patronymic               :string
	dateOfBirth              :string
	pasport                  :string
	school                   :string
	number                   :string
	mail                     :string
	status                   :string
	pasportSecond:string
	pasportFive:string
	snils                    :string
	policy                   :string
	user_id: string
}

export type TypeEmployeeFormState = Partial<
	Omit<IEmployeeResponse, 'createdAt' | 'updatedAt'>
>
