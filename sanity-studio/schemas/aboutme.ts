export default {
  name: 'aboutme', // 데이터의 이름
  type: 'document', // 데이터의 타입
  title: 'Aboutme', // sanity studio에서 보여주는 이름, 첫 글자는 대문자가 일반적.
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
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
