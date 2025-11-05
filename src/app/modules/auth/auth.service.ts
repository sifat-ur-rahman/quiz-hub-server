/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist

  const user = await User.isUserExistsByUserName(payload.phone);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  //checking if the password is correct

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //create token and sent to the  client

  const jwtPayload: any = {
    userId: user._id,
    phone: user.phone,
    name: user?.username,
    role: user.role,
  };

  const token = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    '30d',
  );
  const respondData = {
    _id: user._id,
    username: user.username,
    phone: user.phone,
    role: user.role,
  };
  return {
    user: respondData,
    token,
  };
};

// Update User Role in DB

const updateUserRoleDB = async (userData: any) => {
  const result = await User.findOneAndUpdate({ _id: userData.id }, userData, {
    new: true,
  });
  return result;
};

export const AuthServices = {
  loginUser,
  updateUserRoleDB,
};
