import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/footer";
import Header from "./components/header";
import { Checkout } from "./routes/checkout";
import { Dashboard } from "./routes/dashboard/dashboard";
import type { Mug } from "./routes/dashboard/mugSchema";
import { Home } from "./routes/home";
import { OrderSummary } from "./routes/order-summary";
import ProductDetails from "./routes/product-details";
import { ShoppingCart } from "./routes/shopping-cart";
import type { CartItem } from "./types/cart";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [openToast, setOpenToast] = useState(false);

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
    setOpenToast(true);
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
  function removeFromCart(name: string) {
    setCart((currentCart) => currentCart.filter((item) => item.name !== name));
  }

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home addToCart={AddToCart} />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />

          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route
            path="/mugs/:id"
            element={<ProductDetails addToCart={AddToCart} />}
          />
        </Routes>
        <Snackbar
          open={openToast}
          autoHideDuration={3000}
          onClose={() => setOpenToast(false)}
        >
          <Alert
            onClose={() => setOpenToast(false)}
            severity="success"
            variant="filled"
          >
            Product added to cart!
          </Alert>
        </Snackbar>

        <Footer />
      </BrowserRouter>
    </>
  );
}
