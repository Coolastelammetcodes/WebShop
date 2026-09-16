import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import type { Mug } from "../types/mug";
import { Link } from "react-router";
import { CardActionArea } from "@mui/material";

type ProductCardProps = {
  mug: Mug;
  addToCart: (mug: Mug) => void;
};

export default function ProductCard({ mug, addToCart }: ProductCardProps) {
  return (
    <Card
      sx={{
        width: 280,
        height: 580,
        borderRadius: "8px",
        boxShadow: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea component={Link} to={`/mugs/${mug.id}`}>
      <CardMedia
        component="img"
        image={mug.filepath}
        alt={`bild på ${mug.name}`}
        sx={{
          width: "100%",
          height: 300,
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      <CardContent
        sx={{
          height: 220,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
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
          onClick={() => addToCart(mug)}
          sx={{
            mt: "auto",
            alignSelf: "flex-start",
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
