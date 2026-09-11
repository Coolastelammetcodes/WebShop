import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/footer";
import Header from "./components/header";
import { Dashboard } from "./routes/dashboard/dashboard";
import type { Mug } from "./routes/dashboard/mugSchema";
import { Home } from "./routes/home";
import { ShoppingCart } from "./routes/shopping-cart";

export default function App() {
  const [cart, setCart] = useState<Mug[]>([]);
  function AddtoCart(mug: Mug) {
    setCart((currentCart) => [...currentCart, mug]);
  }
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
