import { SignIn, SignUp } from "@clerk/clerk-react";
import NavBar from "../components/navbar.jsx";

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <NavBar />
      </header>
      <main className="flex-grow flex">
        {/* Left Column - Image & Overlay */}
        <div
          className="hidden lg:flex w-1/2 bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556740738-b6727783b92e?q=80&w=2670&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-blue-600 opacity-80"></div>
          <div className="relative z-10 p-12 flex flex-col justify-center items-center text-center text-white">
            <h2 className="text-4xl font-bold leading-tight drop-shadow-lg">
              Welcome Back!
            </h2>
            <p className="mt-4 text-lg opacity-90 drop-shadow">
              Log in to your account to access your personalized dashboard and
              continue shopping.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
              Login to SwiftCart
            </h1>
            <p className="text-center text-gray-500 mb-8">
              Login to your account to start shopping.
            </p>
            <SignIn
              appearance={{
                elements: {
                  rootBox: "w-full",
                  formButtonPrimary:
                    "bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-sm normal-case",
                  socialButtonsBlockButton:
                    "bg-gray-100 hover:bg-gray-200 transition duration-300 text-gray-800",
                  headerTitle: "text-2xl font-semibold",
                  headerSubtitle: "text-gray-600",
                  dividerLine: "bg-gray-200",
                },
              }}
              signUpUrl="/register"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
