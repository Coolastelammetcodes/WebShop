import { Box, Grid, Typography } from "@mui/material";
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
          minHeight: {
            xs: "300px",
            md: "400px",
          },
          overflow: "hidden",
          backgroundImage:
            "linear-gradient(rgba(210,202,190,0.18),rgba(210,202,190,0.18)),url('/hero-mugs.jpeg')",
          backgroundSize: {
            xs: "auto 100%",
            md: "cover",
          },
          backgroundPosition: {
            xs: "center",
            md: "center",
          },
          animation: {
            xs: "none",
            md: "zoom 8s ease-in-out infinite alternate",
          },

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
          padding: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: "280px",
              sm: "400px",
              md: "450px",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: {
                xs: "1.8rem",
                sm: "2.5rem",
                md: "3.75rem",
              },
            }}
          >
            Discover Our Collection
          </Typography>

          <Typography variant="h6" sx={{ mb: 3 }}>
            Find your perfect mug for every moment.
          </Typography>
        </Box>
      </Box>

      <main>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 280px)",
              md: "repeat(3, 280px)",
            },
            justifyContent: "center",
            justifyItems: "center",
            gap: 3,
            px: {
              xs: 1,
              sm: 2,
            },
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
