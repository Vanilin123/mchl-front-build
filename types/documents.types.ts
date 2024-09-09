import type { IBase } from './root.types'

export interface DocumentsResponse extends IBase {
  title:string
  link:string
}

export type TypeDocuments = Partial<Omit<DocumentsResponse, 'createdAt' | 'updatedAt'>>