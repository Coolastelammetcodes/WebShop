import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSetAtom } from "jotai";
import { deleteMug, getMugs } from "../../api/mugs";
import { editMugDialogOpenAtom, selectedMugAtom } from "../../atoms/dialog";
import type { Mug } from "./mugSchema";

type MugWithId = Mug & { id: number };

export function DisplayProducts() {
  const fetchQuery = useQuery({
    queryKey: ["mugs"],
    queryFn: getMugs,
  });

  const queryClient = useQueryClient();
  const setSelectedMug = useSetAtom(selectedMugAtom);
  const setEditDialogOpen = useSetAtom(editMugDialogOpenAtom);

  const handleEdit = (mug: MugWithId) => {
    setSelectedMug(mug);
    setEditDialogOpen(true);
  };

  const deleteQuery = useMutation({
    mutationFn: deleteMug,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mugs"] });
    },
  });

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(auto-fill, minmax(240px, 1fr))",
        },
        gap: { xs: 2, sm: 3 },
        mt: 4,
      }}
    >
      {fetchQuery.data?.map((mug: MugWithId) => (
        <Card
          key={mug.id}
          sx={{
            height: "100%",
            borderRadius: "8px",
            boxShadow: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            image={mug.filepath}
            alt={`bild på ${mug.name}`}
            sx={{
              width: "100%",
              height: { xs: 200, sm: 270 },
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
                fontSize: { xs: "1.15rem", sm: "1.5rem" },
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

          <CardActions
            sx={{
              justifyContent: "flex-start",
              px: 2,
              pb: 2,
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => handleEdit(mug)}
              sx={{
                borderRadius: "20px",
                color: "#7A5236",
                borderColor: "#7A5236",
                "&:hover": {
                  borderColor: "#5F3E29",
                  backgroundColor: "rgba(122, 82, 54, 0.08)",
                },
              }}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              onClick={() => deleteQuery.mutate(mug.id)}
              sx={{
                borderRadius: "20px",
                backgroundColor: "#7A5236",
                "&:hover": {
                  backgroundColor: "#5F3E29",
                },
              }}
            >
              {deleteQuery.isPending ? "Deleting..." : "Delete"}
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
