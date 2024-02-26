import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Tecrube',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sirket adi',
      type: 'string',
    }),
    defineField({
        name: 'date',
        title: 'İslediyin muddet',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Aciqlama',
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
