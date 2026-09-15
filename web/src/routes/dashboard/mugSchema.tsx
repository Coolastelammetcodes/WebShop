import z from "zod";

export const Mug = z.object({
  id: z.number(),
  name: z
    .string()
    .trim()
    .min(2, { error: "name cannot be less than 2 characters.." })
    .max(20, { error: "name cannot be more than 20 characters.." }),
  description: z
    .string()
    .min(5, "description is required")
    .max(500, { error: "description can't contain more than 500 characters." }),
  price: z.number().positive(),
  filepath: z.url({ error: "must be a valid url.." }),
});

export type Mug = z.infer<typeof Mug>;
