import type { IBase } from './root.types'

export interface NewsResponse extends IBase {
  title:string
  picture:string
  text:string
}

export type TypeNews = Partial<Omit<NewsResponse, 'createdAt' | 'updatedAt'>>