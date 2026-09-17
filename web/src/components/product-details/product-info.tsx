import { Grid, Stack, Box, Typography } from "@mui/material";
import type { Mug } from "../../types/mug";

type ProductInfoProps = {
    mug: Mug
}

export default function ProductInfo({mug}: ProductInfoProps) {
    return(
        <Grid >
          <Stack>
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "capitalize"
                  }}
                >
                  {mug.name}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                variant="h3"
                component="span"
                sx={{
                  fontWeight: "bold"
                }}
              >
                {mug.price}
              </Typography>

              <Typography
                variant="h6"
                component="span"
                sx={{
                  fontWeight: "bold",
                  marginLeft: "0.5rem"
                }}
              >
                kr/st
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                Pris inklusive moms
              </Typography>
            </Box>

            <Typography variant="body1">
              {mug.description}
            </Typography>
            </Stack>
        </Grid>
    );
}