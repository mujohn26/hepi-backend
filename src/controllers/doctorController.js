
import db from '../database/models';
import catchAsyncErr from '../utils/catchAsyncError';
import appError from '../utils/appError';
import { encryptPassword, decryptPassword } from "../helpers/securePassword";
import { generateAuthToken, dataFromToken } from "../helpers/tokens";
import validator from 'validator';
import mailer from '../helpers/send.email.helper';
import { sendMessage } from "../utils/sendSMS";

export const createDoctor = catchAsyncErr(async (req, res, next) => {

    let {
        firstName,
        lastName,
        email,
        // password,
        tel,
        nationality,
        educationLevel,
        licence,
        locProvince,
        locDistrict,
        locSector,
        bio,
        // extra,
        // rePassword
    } = req.body;

    if(!validator.isEmail(email)){
        return next(new appError(400, 'Please your email is not valid!'));
    }

    if (firstName === '' || lastName === '' || email === ''  || tel === '' || nationality===''|| educationLevel===''
        || licence ==='' || locProvince ==='' || locDistrict ==='' || locSector ==='') {
        return next(new appError(400, 'Please fill all data cleary!'));
    }

    // if (password != rePassword) {
    //     return next(new appError(400, 'Please try again password does not match'));
    // }

    // password = await encryptPassword(password);
    const newDoctor = {
        firstName,
        lastName,
        email,
        // password,
        tel,
        nationality,
        educationLevel,
        licence,
        locProvince,
        locDistrict,
        locSector,
        bio,
    };

    const newUserDoctor = await db.doctor.create(newDoctor);

    const token = generateAuthToken({
        id: newUserDoctor.id,
        doctorEmail: newUserDoctor.email,
    });

    const emailView = mailer.welcomeDoctorView(email, firstName);
    mailer.sendEmail(email, 'Welcome email', emailView);
    await sendMessage(firstName, tel);

    res.status(201).json({
        message: "Admin Created success",
        data: newUserDoctor,
        token: token,
    });

});