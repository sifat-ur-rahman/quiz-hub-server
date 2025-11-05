import { NextFunction, Request, Response } from 'express';
import { AuthServices } from './auth.service';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await AuthServices.loginUser(userData);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User login successful',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// update user role
const updateUserRole = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.userId;
    const updatedUserData = req.body;
    const userData = {
      id,
      role: updatedUserData.role,
    };

    const result = await AuthServices.updateUserRoleDB(userData);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'User role updated successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AuthControllers = {
  loginUser,
  updateUserRole,
};
