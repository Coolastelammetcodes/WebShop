import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/footer";
import Header from "./components/header";
import { Dashboard } from "./routes/dashboard/dashboard";
import type { Mug } from "./routes/dashboard/mugSchema";
import { Home } from "./routes/home";
import { ShoppingCart } from "./routes/shopping-cart";

type CartItem = Mug & {
  quantity: number;
};
export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  function AddToCart(mug: Mug) {
    setCart((currentCart) => {
      const existingMug = currentCart.find((item) => item.name === mug.name);

      if (existingMug) {
        return currentCart.map((item) =>
          item.name === mug.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...mug, quantity: 1 }];
    });
  }

  function increaseQuantity(name: string) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(name: string) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home addToCart={AddToCart} />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
