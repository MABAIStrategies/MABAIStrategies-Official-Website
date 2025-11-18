import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  company: z.string().min(2).max(120),
  role: z.string().min(2).max(120),
  companySize: z.enum(['1-20', '21-100', '101-500', '501-2000', '2000+']),
  message: z.string().min(10).max(1000)
});

export type ContactPayload = z.infer<typeof contactSchema>;
