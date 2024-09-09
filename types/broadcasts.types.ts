import type { IBase } from './root.types'

export interface BroadcastsResponse extends IBase {
  title:string
  broadcastsLink:string
  text:string
  dateGame: Date
}

export type TypeBroadcasts = Partial<Omit<BroadcastsResponse, 'createdAt' | 'updatedAt'>>