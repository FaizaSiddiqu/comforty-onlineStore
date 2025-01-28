import Image from "next/image";

const products = [
  { id: 1, image: "/Image-7.png", isMain: true },
  { id: 2, image: "/Products.png" },
  { id: 3, image: "/Image-4.png" },
  { id: 4, image: "/Image-1.png" },
  { id: 5, image: "/Image-4.png" },
];

const NewProducts = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Layout Wrapper */}
        <div className="relative flex flex-wrap md:flex-nowrap gap-8">
          {/* Sidebar with Text */}
          <div className="absolute md:relative top-0 left-4 md:top-auto md:left-auto md:flex md:flex-col justify-center items-center md:rotate-0 rotate-90 z-10">
            <p className="text-sm md:text-lg font-semibold text-gray-700">
              EXPLORE NEW AND POPULAR STYLES
            </p>
          
          </div>

          {/* Main Product Section */}
          <div className="w-full md:w-2/3">
            <Image
              src={products[0].image}
              alt="Main Product"
              width={800}
              height={800}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>

          {/* Other Product Section */}
          <div className="w-8 md:w-1/3 grid grid-cols-2 gap-4">
            {products.slice(1).map((product) => (
              <div key={product.id}>
                <Image
                  src={product.image}
                  alt={`Product ${product.id}`}
                  width={400}
                  height={400}
                  className="rounded-lg shadow-md object-cover w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;

