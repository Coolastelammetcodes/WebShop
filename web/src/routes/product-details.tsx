import { Box, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getSpecificMug } from "../api/mugs";
import ProductImage from "../components/product-details/product-image";
import ProductInfo from "../components/product-details/product-info";
import type { Mug } from "../types/mug";

type ProductDetailsProps = {
  addToCart: (mug: Mug) => void;
};

export default function ProductDetails({ addToCart }: ProductDetailsProps) {
  const { id } = useParams<{ id: string }>();

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
        maxWidth: "1200px",
        margin: "0 auto",
        padding: {
          xs: "2rem 1rem",
          md: "4rem 2rem",
        },
      }}
    >
      <Grid
        container
        spacing={{
          xs: 4,
          md: 8,
        }}
        alignItems="center"
      >
        {/* Product image */}
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ProductImage mug={mug} />
          </Box>
        </Grid>

        {/* Product information */}
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <ProductInfo mug={mug} addToCart={addToCart} />
        </Grid>
      </Grid>
    </Box>
  );
}
