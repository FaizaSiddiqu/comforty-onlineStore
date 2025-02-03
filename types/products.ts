export interface Product {
    image(image: any): unknown;
    _id: string;
    title: string;
    price: number;
    priceWithoutDiscount?: number;
    badge?: string;
    description: string;
    inventory: number;
    slug : {
      _type : "slug",
      current : string;
    };

  

    imageUrl: string;
    category: {
      title: string;
    };
    tags: string[];
  
 }
