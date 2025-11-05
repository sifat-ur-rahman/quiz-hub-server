import { z } from 'zod';

export const userRegistrationValidationSchema = z.object({
  body: z.object({
    username: z.string(),
    email: z.string().email(),
    phone: z.string(),
    password: z.string(),
    role: z.enum(['Student', 'Examiner', 'Admin']).default('Student'),
  }),
});

export const userValidationSchema = {
  userRegistrationValidationSchema,
};
