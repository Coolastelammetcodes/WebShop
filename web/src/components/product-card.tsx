import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Link } from "react-router";
import type { Mug } from "../types/mug";

type ProductCardProps = {
  mug: Mug;
  addToCart: (mug: Mug) => void;
};

export default function ProductCard({ mug, addToCart }: ProductCardProps) {
  return (
    <Card
      sx={{
        width: 280,
        height: 520,
        borderRadius: "8px",
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea
        component={Link}
        to={`/mugs/${mug.id}`}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <CardMedia
          component="img"
          image={mug.filepath}
          alt={`bild på ${mug.name}`}
          sx={{
            width: "100%",
            height: 270,
            objectFit: "cover",
          }}
        />

        <CardContent
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Georgia, serif",
              fontWeight: 500,
            }}
          >
            {mug.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              mt: 1,
            }}
          >
            {mug.description}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: 500,
              mt: 1,
            }}
          >
            {mug.price} kr
          </Typography>
        </CardContent>
      </CardActionArea>

      <Button
        variant="contained"
        onClick={(event) => {
          event.stopPropagation();
          addToCart(mug);
        }}
        sx={{
          alignSelf: "flex-start",
          margin: "0 16px 16px",
          backgroundColor: "#7A5236",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#5F3E29",
          },
        }}
      >
        ADD TO CART
      </Button>
    </Card>
  );
}
