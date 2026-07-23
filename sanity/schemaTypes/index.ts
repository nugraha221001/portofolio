import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
// HAPUS import blockImage dari sini

export const schema: { types: SchemaTypeDefinition[] } = {
  // HAPUS blockImage dari dalam array
  types: [blockContentType, categoryType, postType, authorType], 
}