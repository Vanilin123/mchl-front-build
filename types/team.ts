import type { IBase } from './root.types'

export interface ITeamResponse extends IBase {
	teamLogo: string
	teamName: string
	statement: string
	application: string
	teamType: string
	user_id: string
}

export type TypeTeamFormState = Partial<
	Omit<ITeamResponse, 'createdAt' | 'updatedAt'>
>
