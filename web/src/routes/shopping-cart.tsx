import Breadcrumbs from "../components/breadcrumbs";
import type { Mug } from "./dashboard/mugSchema";

type CartItem = Mug & {
  quantity: number;
};

export function ShoppingCart({ cart }: { cart: CartItem[] }) {
  return (
    <>
      <Breadcrumbs currentPage="Shopping Cart" />
      <h1>Shopping Cart</h1>

      {cart.map((mug) => (
        <div key={mug.name}>
          <img src={mug.filepath} alt={mug.name} width="150" />

          <h2>{mug.name}</h2>

          <p>{mug.description}</p>

          <p>{mug.price} kr</p>
          <p>Quantity: {mug.quantity}</p>
        </div>
      ))}
    </>
  );
}
