import { Link } from "react-router";

import Box from "@mui/material/Box";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        padding: 3,
        textAlign: "center",
        marginTop: 4,
      }}
    >
      <p>@2026 Webshop</p>

      <Box
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/shopping-cart ">Shopping Cart</Link>
        <Link to="/Admin">Admin</Link>
      </Box>

      <p>Contact us</p>
    </Box>
  );
}
