import { Box, Button, TextField, Typography } from "@mui/material";

export function Checkout() {
  return (
    <Box sx={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "30px" }}>
        Checkout
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TextField label="First Name" />
        <TextField label="Last Name" />
        <TextField label="Email" type="email" />
        <TextField label="Phone" />
        <TextField label="Address" />
        <TextField label="City" />
        <TextField label="Postal Code" />

        <Button variant="contained">Continue</Button>
      </Box>
    </Box>
  );
}
