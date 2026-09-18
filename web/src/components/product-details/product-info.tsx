import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import type { Mug } from "../../types/mug";
import DescriptionAccordion from "./description-accordion";

type ProductInfoProps = {
  mug: Mug;
  addToCart: (mug: Mug) => void;
};

export default function ProductInfo({ mug, addToCart }: ProductInfoProps) {
  return (
    <Grid>
      <Stack spacing={"1rem"}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                fontSize: {
                  xs: "2rem",
                  md: "2.5rem",
                },
                fontFamily: "Georgia, serif",
              }}
            >
              {mug.name}
            </Typography>
            <Stack
              direction={"row"}
              sx={{
                textTransform: "capitalize",
                fontSize: "",
                fontFamily: "fangsong",
                marginLeft: "0.5rem",
              }}
            >
              <Typography variant="body1" sx={{ marginRight: "0.5rem" }}>
                product id:
              </Typography>
              <Typography variant="body1">{mug.id}</Typography>
            </Stack>
          </Stack>
        </Box>

        <Box>
          <Typography
            variant="h3"
            component="span"
            sx={{
              fontWeight: "bold",
            }}
          >
            {mug.price}
          </Typography>

          <Typography
            variant="h6"
            component="span"
            sx={{
              fontWeight: "bold",
              marginLeft: "0.5rem",
            }}
          >
            SEK/mug
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={() => addToCart(mug)}
          sx={{
            mt: "auto",
            alignSelf: "flex-start",
            backgroundColor: "#7A5236",
            borderRadius: "",
            "&:hover": {
              backgroundColor: "#5F3E29",
            },
          }}
        >
          ADD TO CART
        </Button>

        <DescriptionAccordion mug={mug} />

        <Stack direction="row" spacing="0.5rem">
          <LocalShippingIcon fontSize="small" />

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            3-5 business days
          </Typography>
        </Stack>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Lowest price in the last 30 days: {mug.price} SEK
        </Typography>
      </Stack>
    </Grid>
  );
}
