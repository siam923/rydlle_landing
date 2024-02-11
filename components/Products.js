import ProductItem from "./ProductItem";
import products from "@/lib/data.json"; // Adjust the path as needed

const ProductsGallery = () => {
  return (
    <div id="products" className="container mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Our Products</h2>
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsGallery;
