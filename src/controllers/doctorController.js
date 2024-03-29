import db from "../database/models";
import catchAsyncErr from "../utils/catchAsyncError";
import appError from "../utils/appError";
import { encryptPassword, decryptPassword } from "../helpers/securePassword";
import { generateAuthToken, dataFromToken } from "../helpers/tokens";
import validator from "validator";
import mailer from "../helpers/send.email.helper";
import { sendMessage } from "../utils/sendSMS";
import response from "../helpers/response";
import staffServices from "../services/staff.services";
import servicesService from '../services/services.service';
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

  if (!validator.isEmail(email)) {
    return next(new appError(400, "Please your email is not valid!"));
  }

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    tel === "" ||
    nationality === "" ||
    educationLevel === "" ||
    licence === "" ||
    locProvince === "" ||
    locDistrict === "" ||
    locSector === ""
  ) {
    return next(new appError(400, "Please fill all data cleary!"));
  }

  const newDoctor = {
    firstName,
    lastName,
    email,
    tel,
    nationality,
    educationLevel,
    licence,
    locProvince,
    locDistrict,
    locSector,
    bio
  };

  const newUserDoctor = await db.doctor.create(newDoctor);
  const {services} =  req.body;
  services.map(async(service,index)=>{
    const data={
        serviceName:service.serviceName,
        staffId:newUserDoctor.id,
    }
    await db.services.create(data)
  })
  const token = generateAuthToken({
    id: newUserDoctor.id,
    doctorEmail: newUserDoctor.email,
  });

    const emailView = mailer.welcomeDoctorView(email, firstName);
    mailer.sendEmail(email, "Welcome email", emailView);
    await sendMessage(firstName, tel);

  res.status(201).json({
    message: "Doctor Created success",
    data: newUserDoctor,
    token: token,
  });
});

export const activateStaff = async (req, res) => {
  try {
    const id = req.params.staffId;
    const updated = await staffServices.activateStaff(id);
    return response.successMessage(
      res,
      "Staff was activated successfully",
      200
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const deactivateStaff = async (req, res) => {
  try {
    const id = req.params.staffId;
    const updated = await staffServices.deactivateStaff(id);
    return response.successMessage(
      res,
      "Staff was activated successfully",
      200
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const getAllStaffs = async (req, res) => {
  try {
    const staffs = await staffServices.getAllStaffs();
    return response.successMessage(
      res,
      "Staff was activated successfully",
      200,
      staffs
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const getAllStaffById = async (req, res) => {
  try {
    const id = req.params.staffId;
    const staff = await staffServices.getStaffById(id);
    return response.successMessage(
      res,
      "Staff was activated successfully",
      200,
      staff
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const getStaffByService = async (req, res) => {
    try {
      const {serviceName} = req.body;
      const services = await servicesService.getServicesByName(serviceName);
      const staffs = [];
      services.map((service, index)=>{
          staffs.push(service.doctor.dataValues)
          
        })
      return response.successMessage(
        res,
        `Staff was activated successfully by ${serviceName}`,
        200,
        staffs
      );
    } catch (error) {
      return response.errorMessage(res, error.message, 500);
    }
  };
