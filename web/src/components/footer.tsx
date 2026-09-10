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
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: "1.2rem",
            letterSpacing: "1px",
          }}
        >
          WebShop
        </Typography>

        <Box
          component="nav"
          sx={{
            display: "flex",
            gap: 3,
            marginLeft: "auto",
          }}
        >
          <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
            Home
          </Link>

          <Link
            to="/shopping-cart"
            style={{ color: "#333", textDecoration: "none" }}
          >
            Shopping Cart
          </Link>

          <Link
            to="/dashboard"
            style={{ color: "#333", textDecoration: "none" }}
          >
            Admin
          </Link>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: "#999", mb: 3 }} />
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
            <input
              placeholder="Your Email"
              style={{
                padding: "10px 14px",
                borderRadius: "20px",
                border: "1px solid #ccc",
              }}
            ></input>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#222",
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            marginRight: 4,
            fontWeight: 500,
          }}
        >
          Contact us
        </Typography>
      </Box>
    </Paper>
  );
}
