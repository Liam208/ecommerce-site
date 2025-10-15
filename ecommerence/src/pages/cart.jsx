import NavBar from "../components/navbar";
import { useCart } from "../cartcontext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  console.log("Cart items:", cart);

  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <NavBar />
      </header>

      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your Cart
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Review your selected items and proceed to checkout.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">
              Cart Items
            </h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="divide-y">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center py-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover mr-6"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <span className="text-blue-600 font-bold">
                        ${item.price}
                      </span>
                    </div>

                    {/* Quantity control */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-6 text-red-500 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-lg p-8 h-fit">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Summary</h2>
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span className="font-bold">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-6">
              <span>Total</span>
              <span className="text-blue-600 font-bold text-xl">
                ${total.toFixed(2)}
              </span>
            </div>
            <button
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 w-full"
              onClick={() => navigate("/receipt")}
            >
              Checkout
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
