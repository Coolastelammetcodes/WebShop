import { Box, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { selectedMugAtom } from "../../atoms/dialog";
import Breadcrumbs from "../../components/breadcrumbs";
import { AddProductForm } from "./addProductForm";
import { DisplayProducts } from "./displayProducts";
import { EditProductForm } from "./editProductForm";

export function Dashboard() {
  const [selectedMug] = useAtom(selectedMugAtom);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 2, sm: 3 },
        maxWidth: "1400px",
        mx: "auto",
      }}
    >
      <Breadcrumbs currentPage="Admin" />

      <Typography
        variant="h4"
        component="h1"
        sx={{
          mt: 2,
          mb: 3,
          fontSize: { xs: "1.75rem", sm: "2.125rem" },
        }}
      >
        Dashboard
      </Typography>

      <AddProductForm />
      {selectedMug && <EditProductForm mug={selectedMug} />}
      <DisplayProducts />
    </Box>
  );
}
