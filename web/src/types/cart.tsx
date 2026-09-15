import type { Mug } from "../routes/dashboard/mugSchema";

export type CartItem = Mug & {
  quantity: number;
};
