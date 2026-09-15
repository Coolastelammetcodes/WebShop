import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { CartItem } from "../types/cart";

export function Checkout({ cart }: { cart: CartItem[] }) {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCustomer({
      ...customer,
      [event.target.name]: event.target.value,
    });
  }

  const total = cart.reduce((sum, mug) => sum + mug.price * mug.quantity, 0);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const order = {
      customer: customer,
      items: cart,
      total: total,
    };

    navigate("/order-summary", {
      state: order,
    });
  }
  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "30px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Checkout
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <TextField
          label="First Name"
          name="firstName"
          value={customer.firstName}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Last Name"
          name="lastName"
          value={customer.lastName}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          value={customer.email}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Phone"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Address"
          name="address"
          value={customer.address}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="City"
          name="city"
          value={customer.city}
          onChange={handleChange}
          fullWidth
        />

        <TextField
          label="Postal Code"
          name="postalCode"
          value={customer.postalCode}
          onChange={handleChange}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: "10px",
            padding: "12px",
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
