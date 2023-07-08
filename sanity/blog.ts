export const blog = {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'content',
            title: 'Content',
            type: 'text',
        },
        {
            name: 'image',
            title: 'bloge Image',
            type: 'image',
        },
               
        {
            name: 'publicationDate',
            title: 'Publication Date',
            type: 'datetime',
        },
        {
            name: 'likes',
            title: 'Likes',
            type: 'number',
            defaultValue: 0,
        },
        {
            name: "categories",
            title: "Categories",
            type: "string",
          },
    ]
}

