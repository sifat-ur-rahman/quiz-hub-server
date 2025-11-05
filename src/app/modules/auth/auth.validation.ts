import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    phone: z.string({ required_error: 'Phone Number is required.' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});
const updateUserRoleValidationSchema = z.object({
  body: z.object({
    role: z.enum(['user', 'admin', 'moderator'], {
      required_error: 'Role is required.',
      invalid_type_error:
        'Invalid role. Allowed roles are user, admin, and moderator.',
    }),
  }),
});
export const AuthValidation = {
  loginValidationSchema,
  updateUserRoleValidationSchema,
};
