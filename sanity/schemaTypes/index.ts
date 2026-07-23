import { type SchemaTypeDefinition } from 'sanity'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { blockImage } from './blockImage' // 1. Import file baru

export const schema: { types: SchemaTypeDefinition[] } = {
  // 2. Tambahkan blockImage ke dalam array ini
  types: [blockContentType, categoryType, postType, authorType, blockImage], 
}