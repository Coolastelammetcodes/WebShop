import { Box } from "@mui/material";
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
        maxWidth: "1100px",
        margin: "0 auto",
        padding: {
          xs: "2rem 1rem",
          md: "4rem 2rem",
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: {
            xs: "2rem",
            md: "5rem",
          },
          alignItems: "center",
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

        <Box>
          <ProductInfo mug={mug} addToCart={addToCart} />
        </Box>
      </Box>
    </Box>
  );
}
