export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Project type',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Project title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Four to five words or technologies used',
    },
    {
      name: 'manifesto',
      title: 'Manifesto of the project',
      type: 'string',
      description: '5 to 12 words describing objectives of the project website',
    },
    {
      name: 'whatwedo',
      title: 'What we do',
      type: 'string',
      description: '15 to 30 words describing objectives of the project website',
    },
    {
      name: 'landingimg',
      title: 'Landing page image of the project website',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'desktopimg',
      title: 'Desktop view of the project website',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mobileimg',
      title: 'Mobile view of the project website',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'finalwords',
      title: 'Final words',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description or final words',
          type: 'string',
        },
      ],
    },
  ],
}
