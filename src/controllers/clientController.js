import db from "../database/models";
import catchAsyncErr from "../utils/catchAsyncError";
import appError from "../utils/appError";
import { encryptPassword, decryptPassword } from "../helpers/securePassword";
import { generateAuthToken, dataFromToken } from "../helpers/tokens";
import { passwordGen } from "../utils/generatorPassword";
import mailer from "../helpers/send.email.helper";
import { sendMessage } from "../utils/sendSMS";
import validator from "validator";

export const contactus = catchAsyncErr(async (req, res, next) => {
  let { names, email, message } = req.body;
  if (!validator.isEmail(email)) {
    return next(new appError(400, "Please your email is not valid!"));
  }
  let emailTo = "hepi06579@gmail.com";
  const emailView = mailer.contactusView(names, email, message);
  mailer.sendEmail(emailTo, "From Contact Us Email:", emailView);

  res.status(201).json({
    message: "Message sent successfully!",
    data: { names, email, message },
  });
});

export const createClient = catchAsyncErr(async (req, res, next) => {
  // console.log('create admin');
  let { firstName, lastName, email, tel, invitedBy, nationality } = req.body;
  let ammountToPay = "5 000";
  let accountName1 = "B-K";
  let accountName2 = "MOMO Pay";
  let accountCode1 = "123 123 123 123 123";
  let accountCode2 = "243165";
  if (!validator.isEmail(email)) {
    return next(new appError(400, "Please your email is not valid!"));
  }
  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    nationality === "" ||
    tel === ""
  ) {
    return next(new appError(400, "Please fill all data cleary! are required"));
  }
  // const password = passwordGen();
  // console.log(password);
  const newClient = {
    firstName,
    lastName,
    email,
    tel,
    invitedBy,
    nationality,
  };

  const newUserClient = await db.client.create(newClient);

  const token = generateAuthToken({
    id: newUserClient.id,
    clientEmail: newUserClient.email,
  });

  const emailView = mailer.activateAccountView(
    email,
    firstName,
    ammountToPay,
    accountName1,
    accountName2,
    accountCode1,
    accountCode2
  );
  mailer.sendEmail(email, "Welcome email", emailView);
  await sendMessage(firstName, tel);

  res.status(201).json({
    message: "client Created success",
    data: newUserClient,
    token: token,
  });
});
