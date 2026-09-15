import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Breadcrumbs from "../components/breadcrumbs";
import type { Mug } from "./dashboard/mugSchema";

type CartItem = Mug & {
  quantity: number;
};

export function ShoppingCart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}: {
  cart: CartItem[];
  increaseQuantity: (name: string) => void;
  decreaseQuantity: (name: string) => void;
  removeFromCart: (name: string) => void;
}) {
  const total = cart.reduce((sum, mug) => sum + mug.price * mug.quantity, 0);
  return (
    <>
      <Breadcrumbs currentPage="Shopping Cart" />

      <Box sx={{ maxWidth: "1000px", margin: "40px auto", padding: "20px" }}>
        <Typography variant="h4" sx={{ marginBottom: "30px" }}>
          Shopping Cart
        </Typography>

        {cart.map((mug) => (
          <Card
            key={mug.name}
            sx={{
              marginBottom: "20px",
              display: "flex",
              padding: "20px",
            }}
          >
            <Box
              component="img"
              src={mug.filepath}
              alt={mug.name}
              sx={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />

            <CardContent>
              <Typography variant="h6">{mug.name}</Typography>

              <Typography>{mug.description}</Typography>

              <Typography sx={{ marginTop: "10px" }}>{mug.price} kr</Typography>

              <Box sx={{ marginTop: "15px" }}>
                <Button onClick={() => decreaseQuantity(mug.name)}>−</Button>

                <Typography component="span" sx={{ margin: "0 10px" }}>
                  {mug.quantity}
                </Typography>

                <Button onClick={() => increaseQuantity(mug.name)}>+</Button>

                <Button
                  onClick={() => removeFromCart(mug.name)}
                  sx={{ marginLeft: "20px" }}
                >
                  Remove
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}

        <Typography variant="h5" sx={{ marginTop: "30px" }}>
          Total: {total} kr
        </Typography>
      </Box>
    </>
  );
}
