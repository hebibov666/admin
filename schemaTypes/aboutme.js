import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'Haqqimda',
  type: 'document',
  fields: [
      defineField({
        name: 'description',
        title: 'Metni daxil et',
        type: 'blockContent',
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
