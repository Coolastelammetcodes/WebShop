import { Box, Button, Grid, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getMugs } from "../api/mugs";
import ProductCard from "../components/product-card";
import type { Mug } from "./dashboard/mugSchema";

interface HomeProps {
  addToCart: (mug: Mug) => void;
}

export function Home({ addToCart }: HomeProps) {
  const query = useQuery({
    queryKey: ["mugs"],
    queryFn: getMugs,
  });

  return (
    <>
      <Box
        sx={{
          minHeight: "400px",
          backgroundImage:
            "linear-gradient(rgba(210,202,190,0.18),rgba(210,202,190,0.18)),url('/hero-mugs.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "zoom 8s ease-in-out infinite alternate",

          "@keyframes zoom": {
            from: {
              backgroundSize: "100%",
            },
            to: {
              backgroundSize: "110%",
            },
          },
          display: "flex",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Box sx={{ maxWidth: "450px" }}>
          <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
            Discover Our Collection
          </Typography>

          <Typography variant="h6" sx={{ mb: 3 }}>
            Find your perfect mug for every moment.
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              borderRadius: "20px",
              px: 4,
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>

      <main>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 280px)",
            justifyContent: "center",
            gap: 3,
            px: 2,
            py: 4,
          }}
        >
          {query.data?.map((mug) => (
            <ProductCard key={mug.id} mug={mug} addToCart={addToCart} />
          ))}
        </Grid>
      </main>
    </>
  );
}
