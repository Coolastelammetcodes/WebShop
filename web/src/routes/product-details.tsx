import { Box, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getSpecificMug } from "../api/mugs";
import ProductImage from "../components/product-details/product-image";

export default function ProductDetails() {
    const { id } = useParams<{id: string}>()

    const query = useQuery({
    queryKey: ["mug", id],
    queryFn: () => getSpecificMug(id!),
    enabled: !!id,
  });

  const mug = query.data;

  if (!mug) {
    return <p>Produkten hittades inte.</p>;
  }

  return (
    <Box
      component="main"
      sx={{
        margin: "0",
        padding: { xs: "1rem", md: "2rem" },
      }}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
       <ProductImage mug={mug}/>
      </Grid>
    </Box>
  );
}