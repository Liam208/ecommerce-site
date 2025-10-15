import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// Helper functions for cookies
function setCookie(name, value, days) {
  const expires = days
    ? "; expires=" + new Date(Date.now() + days * 864e5).toUTCString()
    : "";
  document.cookie =
    name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2)
    return decodeURIComponent(parts.pop().split(";").shift());
  return null;
}

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  // Initialize cart from cookie if available
  const [cart, setCart] = useState(() => {
    const cookie = getCookie("cart");
    return cookie ? JSON.parse(cookie) : [];
  });

  // Save cart to cookie whenever it changes
  useEffect(() => {
    setCookie("cart", JSON.stringify(cart), 7);
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      (prev) =>
        prev
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
              : item
          )
          .filter((item) => item.quantity > 0) // auto-remove if 0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
