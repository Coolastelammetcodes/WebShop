import { Link } from "react-router";

export default function footer() {
  return (
    <footer>
      <p>@2026 Webshop</p>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shopping-cart ">Shopping Cart</Link>
        <Link to="/dashboard">Admin</Link>
      </nav>

      <p>Contact us</p>
    </footer>
  );
}
