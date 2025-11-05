import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { userControllers } from './user.controller';
import { userValidationSchema } from './user.validation';

const router = express.Router();

router.post(
  '/api/auth/register',
  validateRequest(userValidationSchema.userRegistrationValidationSchema),
  userControllers.createUserRegistration,
);

router.get('/api/auth/user-verify', userControllers.userVerify);
router.put('/api/auth/forget-password', userControllers.forgetPassword);

export const UserRoute = router;
