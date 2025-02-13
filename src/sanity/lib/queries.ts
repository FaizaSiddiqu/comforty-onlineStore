// import client from './fetch'; // Ensure that the file './sanityClient.ts' exists in the same directory

// export const fetchProducts = async () => {
//   const query = `*[_type == "products"] | order(title asc) {
//     _id,
//     title,
//     price,
//     description,
//     discountPercentage,
//     "imageURL": productImage.asset->url,
//     tags
//   }`;
  
//   const products = await client.fetch(query);
//   return products;
// };

// export const fetchCategories = async () => {
//   const query = `*[_type == "categories"]{
//     title,
//     "imageUrl": image.asset->url,
//     products
//   }`;
//   const categories = await client.fetch(query);
//   return categories;
// };


import { groq } from "next-sanity";

// Existing product queries
export const allProducts = groq`*[_type == "products"]`;
export const four = groq`*[_type == "products"][0..3]`;



// Shop products query (Add this new query)
export const shopProducts = groq`
  *[_type == "products" && shop == true] {
    _id,
    title,
    description,
    price,
    image {
      asset -> {
        url
      }
    }
  }
`;
