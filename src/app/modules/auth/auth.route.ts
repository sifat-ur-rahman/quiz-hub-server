import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/api/auth/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser,
);

router.put(
  '/api/users/:userId/role',
  auth('admin'),
  (req, res, next) => {
    req.params = req.params || {}; // Ensure params exist
    next();
  },
  validateRequest(AuthValidation.updateUserRoleValidationSchema),
  AuthControllers.updateUserRole,
);
export const AuthRoutes = router;
