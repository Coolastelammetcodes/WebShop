import { CardMedia, Paper } from "@mui/material";
import type { Mug } from "../../types/mug";

type ProductImageProps = {
  mug: Mug;
};

export default function ProductImage({ mug }: ProductImageProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        backgroundColor: "whitesmoke",
        padding: "1rem",
      }}
    >
      <CardMedia
        component="img"
        image={mug.filepath}
        alt={`Bild på ${mug.name}`}
        sx={{
          width: "100%",
          maxWidth: 450,
          maxHeight: 500,
          objectFit: "contain",
        }}
      />
    </Paper>
  );
}
