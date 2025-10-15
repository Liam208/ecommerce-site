import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useCart } from "../cartcontext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { cart } = useCart();
  console.log("Navbar: ", cart);
  return (
    <>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-2xl font-bold text-gray-900">SwiftCart</span>
          </div>
        </Link>
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            Contact
          </Link>
        </div>
        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5.4M7 13l-2.293 2.293c-.63.63-.186 1.705.707 1.705H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {cart.length}
              </span>
            )}
          </Link>
          <SignedOut>
            <a href="/login" className="relative">
              <p className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                Login
              </p>
            </a>
            <a href="/register" className="relative">
              <p className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                Register
              </p>
            </a>
          </SignedOut>
          <SignedIn>
            <UserButton
              afterSignOutUrl="/" // redirect after logout
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10", // Tailwind styling
                },
              }}
            />
          </SignedIn>
          {/* Mobile Menu Button */}
          <button className="md:hidden" aria-label="Open menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
