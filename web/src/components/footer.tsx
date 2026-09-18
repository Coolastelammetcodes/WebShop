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
        backgroundColor: "#D6CEC2",
        color: "black",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection:{xs:"column", md:"row"},
          alignItems: "center",
          paddingBottom: 1,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
            fontSize: "1.2rem",
            letterSpacing: ".2rem",
            color: "#333333",
          }}
        >
          Mug & Co.
        </Typography>

        <Box
          component="nav"
          sx={{
            display: "flex",
            gap: 3,
            marginLeft: {md:"auto"},
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
          flexDirection:{xs:"column", sm:"row"},
          justifyContent: {xs: "center", sm:"space-between"},
          px: {xs:"0", md:"5rem"},
          gap: 4
        }}
      >
        <Box sx={{display: "flex", flexDirection: {xs:"column"}}}>
          <Typography variant="body2">Stay Updated</Typography>

          <Box sx={{ gap: 1, mt: 1, mr: 2 }}>
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

        <Box sx={{ display: "flex", flexDirection: {xs:"column"}, textAlign: {xs:"center", sm:"inherit"}, marginRight: {sm: 4} }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              marginBottom: 1,
              color: "#333333",
            }}
          >
            Contact Us
          </Typography>

          <Typography variant="body2">hello@mugandco.se</Typography>

          <Typography variant="body2">+46 70 123 ** **</Typography>

          <Typography variant="body2">Borås</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
