import NavBar from "../components/navbar";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; // <-- add useEffect

const steps = [
  { label: "Order Placed", desc: "We've received your order." },
  { label: "Processing", desc: "We're preparing your items." },
  { label: "Shipped", desc: "Your order is on the way." },
  { label: "Out for Delivery", desc: "Courier is delivering your package." },
  { label: "Delivered", desc: "Your order has arrived!" },
];

export default function Shipping() {
  // Simulate progress (for demo: advance every 2s)
  const [currentStep, setCurrentStep] = useState(0); // Start from 0

  // Auto-advance steps every 2 seconds until the last step
  useEffect(() => {
    if (currentStep < steps.length - 1) {
      const timer = setTimeout(() => setCurrentStep(currentStep + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <NavBar />
      </header>
      <section className="bg-blue-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Track Your Order
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Stay updated on your order's journey to your doorstep.
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-blue-600 text-center">
            Shipping Status
          </h2>
          <ol className="relative border-l-4 border-blue-200 ml-4">
            {steps.map((step, idx) => (
              <li key={step.label} className="mb-10 ml-6">
                <span
                  className={`absolute -left-5 flex items-center justify-center w-8 h-8 rounded-full border-4 ${
                    idx <= currentStep
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-gray-200 border-blue-200 text-gray-400"
                  }`}
                >
                  {idx + 1}
                </span>
                <h3
                  className={`font-semibold text-lg ${
                    idx <= currentStep ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </h3>
                <p className="text-gray-500">{step.desc}</p>
                {idx === currentStep && (
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                    {idx === steps.length - 1 ? "Arrived" : "Current Status"}
                  </span>
                )}
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
