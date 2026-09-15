import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router";

export function OrderSummary() {
  const location = useLocation();
  const order = location.state;

  return (
    <Box
      sx={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "30px",
        fontFamily: "Georgia, serif",
        color: "#222",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "35px",
          fontWeight: 500,
          letterSpacing: "1px",
        }}
      >
        Order Summary
      </Typography>

      <Typography variant="h5" sx={{ marginBottom: "15px" }}>
        Customer Information
      </Typography>

      <Box sx={{ marginBottom: "30px" }}>
        <Typography>First Name: {order.customer.firstName}</Typography>
        <Typography>Last Name: {order.customer.lastName}</Typography>
        <Typography>Email: {order.customer.email}</Typography>
        <Typography>Phone: {order.customer.phone}</Typography>
        <Typography>Address: {order.customer.address}</Typography>
        <Typography>City: {order.customer.city}</Typography>
        <Typography>Postal Code: {order.customer.postalCode}</Typography>
      </Box>

      <Typography variant="h5" sx={{ marginBottom: "15px" }}>
        Order
      </Typography>

      {order.items.map((item: any) => (
        <Box
          key={item.name}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "15px 0",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Box
            component="img"
            src={item.filepath}
            alt={item.name}
            sx={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          <Box>
            <Typography variant="h6">{item.name}</Typography>
            <Typography>
              {item.price} kr × {item.quantity}
            </Typography>
          </Box>
        </Box>
      ))}

      <Typography
        variant="h5"
        sx={{
          marginTop: "30px",
          textAlign: "right",
        }}
      >
        Total: {order.total} kr
      </Typography>
    </Box>
  );
}
