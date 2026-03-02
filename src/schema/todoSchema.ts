import { z } from "zod";

export const todoSchema = z.object({
  text: z
    .string()
    .min(3, "Rencana minimal 3 karakter")
    .max(50, "Rencana maksimal 50 karakter"),
});

export type TodoInput = z.infer<typeof todoSchema>;
