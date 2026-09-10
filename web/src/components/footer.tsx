import { Link } from "react-router";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Paper
      component="footer"
      elevation={3}
      sx={{
        mt: 4,
        px: 2,
        py: 2,
        backgroundColor: "#f0f0f0",
        color: "black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBottom: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            letterSpacing: "0.5px",
            fontFamily: "Georgia, serif",
          }}
        >
          © 2026 WebShop
        </Typography>

        <Box
          component="nav"
          sx={{
            display: "flex",
            gap: 3,
            marginLeft: "auto",
          }}
        >
          <Link to="/" style={{ color: "#333" }}>
            Home
          </Link>

          <Link to="/shopping-cart" style={{ color: "#333" }}>
            Shopping Cart
          </Link>

          <Link to="/admin" style={{ color: "#333" }}>
            Admin
          </Link>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#555", mb: 3 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        <Box>
          <Typography variant="body2">Stay Updated</Typography>

          <Box sx={{ display: "flex", gap: 1, mt: 1, mr: 2 }}>
            <input placeholder="Your Email" />

            <Button variant="contained">Subscribe</Button>
          </Box>
        </Box>

        <Typography variant="body2">Contact us</Typography>
      </Box>
    </Paper>
  );
}
