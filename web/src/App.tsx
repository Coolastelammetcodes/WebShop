import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header";
import { Admin } from "./routes/admin";
import { Home } from "./routes/home";
import { ShoppingCart } from "./routes/shopping-cart";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
