import z from "zod";

export const customerSchema = z.object({
  firstName: z.string().min(1, "first name required.."),
  lastName: z.string().min(1, "last name required.."),
  email: z.email("invalid email.."),
  phone: z.string().min(1, "phone number required.."),
  address: z.string().min(1, "address is required.."),
  city: z.string().min(1, "city required.."),
  postalCode: z.string().min(1, "postal code is required.."),
});

export type CustomerFormData = z.infer<typeof customerSchema>;
