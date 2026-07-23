import { defineType, defineField } from 'sanity'

export const blockImage = defineType({
  name: 'blockImage', // Kita beri nama khusus
  type: 'image',
  title: 'Image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
      description: 'Deskripsi gambar (Sangat penting untuk SEO dan Aksesibilitas).',
    })
  ]
})