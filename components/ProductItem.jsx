import Image from "next/image";

const ProductItem = ({ name, image }) => {
  return (
    <div className="border w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="rounded shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Fixed height container */}
        <div className="h-64 relative">
          <Image
            src={image}
            alt={name}
            layout="fill" // This makes the image fill the container
            className="rounded-t" // This rounds the top corners of the image
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-center">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
