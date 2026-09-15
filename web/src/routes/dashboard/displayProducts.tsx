import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
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
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        mt: 4,
      }}
    >
      {fetchQuery.data?.map((mug: MugWithId) => (
        <Card
          key={mug.id}
          sx={{
            width: 280,
            backgroundColor: "#D6CEC2",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={mug.filepath}
            alt={mug.name}
            sx={{
              width: "100%",
              height: 220,
              objectFit: "cover",
            }}
          />

          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                mb: 1,
              }}
            >
              {mug.name}
            </Typography>

            <Typography variant="body2" sx={{ mb: 1 }}>
              {mug.description}
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              {mug.price} kr
            </Typography>
          </CardContent>

          <CardActions sx={{ justifyContent: "flex-end", px: 2, pb: 2 }}>
            <Button
              size="small"
              variant="outlined"
              onClick={() => handleEdit(mug)}
              sx={{
                color: "#6F4E37",
                borderColor: "#6F4E37",
                "&:hover": {
                  borderColor: "#5A3E2B",
                  backgroundColor: "rgba(111, 78, 55, 0.08)",
                },
              }}
            >
              Edit
            </Button>

            <Button
              size="small"
              variant="contained"
              onClick={() => deleteQuery.mutate(mug.id)}
              sx={{
                backgroundColor: "#6F4E37",
                "&:hover": {
                  backgroundColor: "#5A3E2B",
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
