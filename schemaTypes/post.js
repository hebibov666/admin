import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Proyekt adı',
      type: 'string',
    }),
    {
      name: 'tags',
      title: 'Texnologiyalar',
      type: 'array',
      of: [{type: 'string'}], // veya farklı bir türde belirlenen seçenekler olabilir
      options: {
        layout: 'tags' // Bu, seçeneklerin etiket biçiminde görüntülenmesini sağlar
      }
    },
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
