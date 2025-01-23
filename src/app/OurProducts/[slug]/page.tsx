
import React from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import Image from "next/image";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import TopProduct from "@/app/Components/TopProducts/page"


// interface OurProductPageProp {
//   params: Promise<{ slug: string }>;
// }
// async function getProduct(slug: string): Promise<Product | null> {
//   const product = await client.fetch(
//     groq`*[_type == "Products" && slug.current == $slug][0]{
//       _id,
//       title,
//       type,
//       image,
//       price,
//     }`,
//     { slug }
//   );
//   console.log("Fetched product:", product); // Debugging
//   return product || null; // Return null if no product is found
// }

// export default async function productPage({ params }: OurProductPageProp) {
//   const { slug } = await params;
//   console.log("Slug received:", slug); // Debugging

//   const product = await getProduct(slug);

//   if (!product) {
//     console.log("Product not found for slug:", slug); // Debugging
//     return (
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h1 className="text-4xl font-bold">Product not found</h1>
//         <p className="text-lg mt-4">The product you're looking for doesn't exist.</p>
//       </div>
//     );
//   }
// }

interface OurProductPageProp {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(
    groq`*[_type == "Products" && slug.current == $slug][0]{
        _id,
        title,
        type,
        image,
        price,

        }`,
    { slug }
  );
}

export default async function productPage({ params }: OurProductPageProp) {
  const { slug } = await params;
  const product = await getProduct(slug);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.title}
              width={500}
              height={500}
              className="rouneded-md shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-2xl font-sans">{product.price}</p>
        </div>
        <TopProduct/>
      </div>
      
    </div>
  );
}






