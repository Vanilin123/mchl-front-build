import type { IBase } from './root.types'

export interface CalendarResponse extends IBase {
  teamOne :string
  teamSecond:string
  logoTeamOne:string
  logoTeamSecond :string
  resultTeamOne :string
  resultTeamSecond:string
  typeOfEndGame :string
  dateOfGame:string
}

export type TypeCalendar = Partial<Omit<CalendarResponse, 'createdAt' | 'updatedAt'>>