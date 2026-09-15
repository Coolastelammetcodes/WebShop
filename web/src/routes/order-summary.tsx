import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router";

export function OrderSummary() {
  const location = useLocation();
  const order = location.state;

  return (
    <Box sx={{ maxWidth: "700px", margin: "50px auto", padding: "30px" }}>
      <Typography variant="h4" sx={{ marginBottom: "30px" }}>
        Order Summary
      </Typography>

      <Typography variant="h5">Customer Information</Typography>

      <Typography>First Name: {order.customer.firstName}</Typography>
      <Typography>Last Name: {order.customer.lastName}</Typography>
      <Typography>Email: {order.customer.email}</Typography>
      <Typography>Phone: {order.customer.phone}</Typography>
      <Typography>Address: {order.customer.address}</Typography>
      <Typography>City: {order.customer.city}</Typography>
      <Typography>Postal Code: {order.customer.postalCode}</Typography>

      <Typography variant="h5" sx={{ marginTop: "30px" }}>
        Order
      </Typography>

      {order.items.map((item: any) => (
        <Box key={item.name} sx={{ marginTop: "15px" }}>
          <Typography>{item.name}</Typography>
          <Typography>
            {item.price} kr × {item.quantity}
          </Typography>
        </Box>
      ))}

      <Typography variant="h5" sx={{ marginTop: "30px" }}>
        Total: {order.total} kr
      </Typography>
    </Box>
  );
}
