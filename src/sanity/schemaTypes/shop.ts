// src/sanity/schemas/shop.js
export default {
    name: 'shop',
    title: 'Shop',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Shop Title',
      },
      {
        name: 'description',
        type: 'text',
        title: 'Shop Description',
      },
      {
        name: 'products',  // Reference to products
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'products' }],
          },
        ],
      },
    ],
  };
  