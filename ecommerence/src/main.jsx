import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/cart.jsx";
import Contact from "./pages/contact.jsx";
import Home from "./Home.jsx";
import Register from "./pages/register.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import Login from "./pages/login.jsx";
import UserProfilePage from "./pages/userProfile.jsx";
import Shop from "./pages/shop.jsx";
import { CartProvider } from "./cartcontext.jsx";
import About from "./pages/about.jsx";
import Receipt from "./pages/receipt.jsx";
import Shipping from "./pages/shipping.jsx";

const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/profile",
        Component: UserProfilePage,
      },
      {
        path: "/shop",
        Component: Shop,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/receipt",
        Component: Receipt,
      },
      {
        path: "/shipping",
        Component: Shipping,
      },
    ],
  },
]);
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      navigate={(to) => window.history.pushState(null, "", to)}
    >
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <RouterProvider router={routes} />
        </CartProvider>
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
);
