/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-const */
import validator from 'validator';
import db from '../database/models';
import catchAsyncErr from '../utils/catchAsyncError';
import appError from '../utils/appError';
import { encryptPassword, decryptPassword } from '../helpers/securePassword';
import { generateAuthToken, dataFromToken } from '../helpers/tokens';
import mailer from '../helpers/send.email.helper';

export const createAdmin = catchAsyncErr(async (req, res, next) => {
  let {
    firstName, lastName, email, secretPassword, tel
  } = req.body;
  if (!validator.isEmail(email)) {
    return next(new appError(400, 'Please your email is not valid!'));
  }
  if (
    firstName === ''
    || lastName === ''
    || email === ''
    || secretPassword === ''
    || tel === ''
  ) {
    return next(new appError(400, 'Please fill all data clearly!'));
  }

  const password = await encryptPassword(secretPassword);
  const newAdmin = {
    firstName,
    lastName,
    email,
    password,
    tel,
  };

  const newUserAdmin = await db.admin.create(newAdmin);
  const emailView = mailer.createAdmin(email, firstName, secretPassword);
  mailer.sendEmail(email, 'Onboard Email', emailView);
  const token = generateAuthToken({
    id: newAdmin.id,
    adminEmail: newUserAdmin.email,
  });
  res.status(201).json({
    message: 'Admin Created success',
    data: newAdmin,
    token,
  });
});
