import Image from "next/image";

const categories = [
  {
    id: 1,
    title: "Wing Chair",
    products: "3,584 Products",
    image: "/Frame2.png", 
  },
  {
    id: 2,
    title: "Wooden Chair",
    products: "157 Products",
    image: "/Image.png",
  },
  {
    id: 3,
    title: "Desk Chair",
    products: "154 Products",
    image: "/Rectangle.jpg",
  },
];

const Category = () => {
  return (
    <div className="category-container">
      <h2 className="category-title">Top Categories</h2>
      <div className="categories">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <Image
              src={category.image}
              alt={category.title}
              width={300}
              height={200}
              className="category-image"
            />
            <div className="category-info">
              <h3 className="category-name">{category.title}</h3>
              <p className="category-products">{category.products}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
