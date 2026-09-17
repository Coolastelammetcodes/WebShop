import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getSpecificMug } from "../api/mugs";
import ProductImage from "../components/product-details/product-image";
import ProductInfo from "../components/product-details/product-info";
import type { Mug } from "../types/mug";
type ProductDetailsProps = {
  addToCart: (mug:Mug) => void
}
export default function ProductDetails({addToCart}: ProductDetailsProps) {
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
    <Grid
      container
      size={{xs:12, md:7}}
      component="main"
      sx={{
        margin: "0",
        padding: { xs: "1rem", md: "2rem" },
      }}
    >

      <Grid
        size={{xs:12, md:7}}
        
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       <ProductImage mug={mug}/>
      </Grid>

      <Grid size={{xs:12, md:4}}>
        <ProductInfo mug={mug} addToCart={addToCart}/>
      </Grid>

    </Grid>
  );
}