import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must contain at least 2 characters.")
    .max(100),

  email: z.email("Enter a valid email address."),

  company: z.string().trim().optional(),
  ProjectType: z.string().trim().optional(),

  message: z.string().trim().min(10, "Message is too short.").max(3000),
  budget: z.string().optional(),

  timeline: z.string().optional(),
});

export type ContactSchema = z.infer<typeof contactSchema>;
