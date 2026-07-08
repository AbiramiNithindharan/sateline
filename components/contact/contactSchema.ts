import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2),

  email: z.email(),

  company: z.string().optional(),

  projectType: z.string(),

  message: z.string().min(20),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
