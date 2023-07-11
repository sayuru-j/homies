import * as z from "zod";

export const userRegisterSchema = z.object({
  name: z.string().min(1).max(18),
  email: z.string().email(),
  password: z.string().min(8),
});

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
