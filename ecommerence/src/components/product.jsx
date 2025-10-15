import { useCart } from "../cartcontext";

export default function ProductCard({ id, name, bio, price, image }) {
  const { addToCart } = useCart();

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden hover:-translate-y-1 transform">
        <img
          src={image}
          alt={name}
          className="w-full h-48 md:h-56 object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{bio}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-blue-600">${price}</span>
            <button
              onClick={() => addToCart({ id, name, price, image })}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300 w-auto md:w-auto"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
