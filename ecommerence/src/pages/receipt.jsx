import { useCart } from "../cartcontext";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";

export default function Receipt() {
  const { cart } = useCart();

  // Calculate totals
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  // Discount: 10% off if subtotal > $100
  const discount = subtotal > 100 ? subtotal * 0.1 : 0;
  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal - discount + shipping;

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <NavBar />
      </header>
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Thank You for Your Purchase!
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Your order has been placed successfully. Here is your receipt.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">
            Order Summary
          </h2>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">No items in your order.</p>
          ) : (
            <div className="divide-y">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <span className="text-gray-500 text-sm">
                      Quantity: {item.quantity}
                    </span>
                  </div>
                  <span className="font-bold text-blue-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="border-t mt-6 pt-6 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-bold">${subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount (10%)</span>
                <span className="font-bold">- ${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-bold">${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Total</span>
              <span className="text-blue-600 font-bold">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="mt-8 text-center flex flex-col gap-4">
            <Link
              to="/shop"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Continue Shopping
            </Link>
            <Link
              to="/shipping"
              className="bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-full shadow hover:bg-gray-200 transition-colors duration-300"
            >
              Track Shipping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
