import type { IBase } from './root.types'

export interface IPlayerResponse extends IBase {
	name:string
	surname:string
	patronymic               :string
	dateOfBirth              :string
	pasport                  :string
	role                     :string
	grip                     :string
	gameNumber               :string
	height                   :string
	weight                   :string
	lastTeamName             :string
	sportSchool              :string
	typeOfPlayer             :string
	school                   :string
	number                   :string
	mail                     :string
	status                   :string
	pasportSecond:string
	pasportFive:string
	schoolDocument           :string
	terminationOfTheContract :string
	insurance                :string
	snils                    :string
	policy                   :string
	consentToParticipate     :string
	ConsentData              :string
	user_id: string
}

export type TypePlayerFormState = Partial<
	Omit<IPlayerResponse, 'createdAt' | 'updatedAt'>
>
