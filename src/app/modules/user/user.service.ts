/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */

import { TUser } from './user.interface';
import { User } from './user.model';
import bcrypt from 'bcrypt';
import { createToken } from '../auth/auth.utils';
import config from '../../config';
import AppError from '../../errors/AppError';

const userRegistrationIntoDB = async (Data: TUser) => {
  const user = await User.create(Data);

  //create token and sent to the  client

  const jwtPayload: any = {
    userId: user?._id,
    phone: user?.phone,
    email: user?.email,
    name: user?.username,
    role: user?.role,
  };

  const token = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    '10d',
  );
  const respondData = {
    _id: user._id,
    username: user.username,
    email: user.email,
    phone: user.phone,
    role: user.role,
  };
  return {
    user: respondData,
    token,
  };
};

const userVerifyDB = async ({ username, phone,email }: TUser) => {
  //username or phone verify
  const user = await User.findOne({ $or: [{ username }, { phone }, {email}] });

  if (!user) {
    throw new AppError(404, 'User not found');
  }
  return user;
};

const forgetPasswordDB = async ({
  userId,
  password,
}: {
  userId: string;
  password: string;
}) => {
  const user = await User.findOne({ _id: userId });

  if (!user) {
    throw new AppError(404, 'User not found');
  }

  if (!password) {
    throw new AppError(400, 'Password is required');
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds),
  );
  //console.log({ hashedPassword });
  // Update the user's password
  user.password = hashedPassword;

  // Save the updated user record
  await user.save();

  // Return success message or updated user (you can customize this)
  return user;
};

export const userService = {
  userRegistrationIntoDB,
  userVerifyDB,
  forgetPasswordDB,
};
