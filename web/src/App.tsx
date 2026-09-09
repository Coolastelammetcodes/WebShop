import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/header";
import { Admin } from "./routes/admin";
import { Home } from "./routes/home";

export default function App() {
  return (
    <>
      <Header></Header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
