import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import type { CartItem } from "../../types/cart";
import { type CustomerFormData, customerSchema } from "./checkoutSchema";

export function Checkout({ cart }: { cart: CartItem[] }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
    },
  });

  const total = cart.reduce((sum, mug) => sum + mug.price * mug.quantity, 0);

  function onSubmit(customer: CustomerFormData) {
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
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <TextField
          label="First Name"
          fullWidth
          autoComplete="given-name"
          {...register("firstName")}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
        />

        <TextField
          label="Last Name"
          fullWidth
          autoComplete="family-name"
          {...register("lastName")}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
        />

        <TextField
          label="Email"
          fullWidth
          autoComplete="email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Phone"
          fullWidth
          autoComplete="tel"
          {...register("phone")}
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />

        <TextField
          label="Address"
          fullWidth
          autoComplete="street-address"
          {...register("address")}
          error={!!errors.address}
          helperText={errors.address?.message}
        />

        <TextField
          label="City"
          fullWidth
          autoComplete="address-level2"
          {...register("city")}
          error={!!errors.city}
          helperText={errors.city?.message}
        />

        <TextField
          label="Postal Code"
          fullWidth
          autoComplete="postal-code"
          {...register("postalCode")}
          error={!!errors.postalCode}
          helperText={errors.postalCode?.message}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: "10px",
            padding: "12px",
            backgroundColor: "#7A5236",
            "&:hover": {
              backgroundColor: "#5F3E29",
            },
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
