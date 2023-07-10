import * as z from "zod";

export const userRegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
