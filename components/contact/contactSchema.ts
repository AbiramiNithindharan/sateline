import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2),

  email: z.email(),

  company: z.string().optional(),

  ProjectType: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),

  timeline: z.string().optional(),
  message: z.string().min(20),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
