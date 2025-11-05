import { NextFunction, Request, Response } from 'express';
import { userService } from './user.service';

const createUserRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userData = req.body;
    const result = await userService.userRegistrationIntoDB(userData);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'User registered successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const userVerify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await userService.userVerifyDB(userData);

    res.status(200).json({
      success: true,
      statusCode: 201,
      message: 'User verified successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const forgetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userData = req.body;
    const result = await userService.forgetPasswordDB(userData);

    res.status(200).json({
      success: true,
      statusCode: 201,
      message: 'User Password Reset successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const userControllers = {
  createUserRegistration,
  userVerify,
  forgetPassword,
};
