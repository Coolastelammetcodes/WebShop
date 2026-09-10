import z from "zod";

export const Mug = z.object({
  name: z
    .string()
    .min(2, { error: "name cannot be less than 2 characters.." })
    .max(20, { error: "name cannot be more than 20 characters.." }),
  description: z.string(),
  price: z.number().positive(),
  filepath: z.string(),
});

export type Mug = z.infer<typeof Mug>;
