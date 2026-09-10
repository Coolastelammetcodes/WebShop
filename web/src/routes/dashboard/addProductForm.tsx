import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { addMug as addMugRequest } from "../../api/mugs";
import { addMugDialogOpenAtom } from "../../atoms/dialog";
import { Mug } from "./mugSchema";

export function AddProductForm() {
  const [open, setOpen] = useAtom(addMugDialogOpenAtom);
  const queryClient = useQueryClient();
  const { register, handleSubmit, formState } = useForm<Mug>({
    resolver: zodResolver(Mug),
  });

  const mutation = useMutation({
    mutationFn: addMugRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mugs"] });
      handleClose();
    },
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addMug = (product: Mug) => {
    mutation.mutate(product);
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add Mug
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Add Mug</DialogTitle>

        <form onSubmit={handleSubmit(addMug)}>
          <DialogContent
            style={{ display: "flex", flexDirection: "column", gap: "1em" }}
          >
            <TextField
              label="Name"
              {...register("name")}
              error={!!formState.errors.name}
              helperText={formState.errors.name?.message}
            />

            <TextField
              label="Description"
              {...register("description")}
              error={!!formState.errors.description}
              helperText={formState.errors.description?.message}
            />

            <TextField
              label="Price"
              type="number"
              {...register("price", { valueAsNumber: true })}
              error={!!formState.errors.price}
              helperText={formState.errors.price?.message}
            />

            <TextField
              label="Filepath"
              {...register("filepath")}
              error={!!formState.errors.filepath}
              helperText={formState.errors.filepath?.message}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} disabled={mutation.isPending}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={mutation.isPending}
            >
              Save
            </Button>
          </DialogActions>

          {mutation.isError && (
            <p style={{ color: "red" }}>Something went wrong</p>
          )}
        </form>
      </Dialog>
    </>
  );
}
