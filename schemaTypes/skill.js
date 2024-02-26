import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Bilikler',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Bilik adı',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Proyekt şəkli',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
