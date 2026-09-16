import { Box, CardMedia, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getMugs, getSpecificMug } from "../api/mugs";

export default function ProductDetails() {
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
    <Box component="main">

        <CardMedia
        component="img"
        image={mug.filepath}
        alt={`bild på ${mug.name}`}
        sx={{
          width: "45%",
          height: 300,
          objectFit: "cover",
          flexShrink: 0,
        }}
      />

      <Typography variant="h4">
        {mug.name}
      </Typography>

      <Typography>
        {mug.description}
      </Typography>

      <Typography>
        {mug.price} kr
      </Typography>

      <Typography>
        ID: {mug.id}
      </Typography>
    </Box>
  );
}