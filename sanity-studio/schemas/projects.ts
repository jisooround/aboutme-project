export default {
  name: 'projects', // 데이터의 이름
  type: 'document', // 데이터의 타입
  title: 'Project', // sanity studio에서 보여주는 이름, 첫 글자는 대문자가 일반적.
  fields: [
    // 필드를 설명하는 개체 배열
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'order',
      type: 'number',
      title: 'order',
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
    },
    {
      name: 'tool',
      type: 'array',
      title: 'Tool',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'content',
      type: 'string',
      title: 'Content',
      rows: 100,
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'githuburl',
      type: 'string',
      title: 'GitHubURL',
    },
    {
      name: 'blogurl',
      type: 'string',
      title: 'BlogURL',
    },
    {
      name: 'datestart',
      type: 'date',
      title: 'Date(start)',
    },
    {
      name: 'dateend',
      type: 'date',
      title: 'Date(end)',
    },
    {
      name: 'team',
      type: 'string',
      title: 'Team',
    },
  ],
}
