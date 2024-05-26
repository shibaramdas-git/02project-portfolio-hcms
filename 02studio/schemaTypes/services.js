export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'servicetype',
      title: 'Service type',
      type: 'string',
    },
    {
      name: 'serviceimgurl',
      type: 'image',
      title: 'Image representing service type',
      description: 'Put an image representing your service type',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
