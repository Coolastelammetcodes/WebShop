import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
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
        borderRadius: "8px",
        boxShadow: 2,
      }}
    >
      <CardMedia
        component="img"
        height="320"
        image={mug.filepath}
        alt={`bild på ${mug.name}`}
        sx={{
          objectFit: "cover",
        }}
      />

      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontFamily: "Georgia, serif",
            fontWeight: 700,
          }}
        >
          {mug.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          {mug.description}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            mb: 2,
          }}
        >
          {mug.price} kr
        </Typography>

        <Button
          variant="contained"
          onClick={() => addToCart(mug)}
          sx={{
            backgroundColor: "#7A5236",
            borderRadius: "20px",
            "&:hover": {
              backgroundColor: "#5F3E29",
            },
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
