import { z } from "zod";

export const projectSchema = z.object({
    name: z.string().min(1, "Project name is required").max(10, "Project name must be at most 10 characters"),
    key: z.string().min(2, "Project key must be atleast 2 characters ").max(10, "Project name must be at most 10 characters"),
    description: z.string().max(500).optional()
})