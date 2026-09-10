import { Link } from "react-router";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Paper
      component="footer"
      elevation={3}
      sx={{
        padding: 3,
        marginTop: 4,
        textAlign: "center",
        backgroundColor: "hsl(19, 34%, 25%)",
        color: "white",
      }}
    >
      <Typography variant="body2">@2026 Webshop</Typography>

      <Box
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
          margin: 2,
          color: "white",
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>

        <Link to="/shopping-cart" style={{ color: "white" }}>
          Shopping Cart
        </Link>

        <Link to="/admin" style={{ color: "white" }}>
          Admin
        </Link>
      </Box>

      <Typography variant="body2">Contact us</Typography>
    </Paper>
  );
}
