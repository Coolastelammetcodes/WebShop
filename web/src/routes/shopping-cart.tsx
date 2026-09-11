import Breadcrumbs from "../components/breadcrumbs";
import type { Mug } from "./dashboard/mugSchema";

export function ShoppingCart({ cart }: { cart: Mug[] }) {
  return (
    <>
      <Breadcrumbs currentPage="Shopping Cart" />
      <h1>Shopping Cart Page</h1>
      {cart.map((mug) => (
        <div key={mug.name}>
          <p>{mug.name}</p>
          <p>{mug.description}</p>
          <p>{mug.price}</p>
        </div>
      ))}
    </>
  );
}
