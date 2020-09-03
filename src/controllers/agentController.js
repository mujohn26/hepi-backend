/* eslint-disable prefer-const */
import validator from "validator";
import db from "../database/models";
import catchAsyncErr from "../utils/catchAsyncError";
import appError from "../utils/appError";
import codeGenerator from "../helpers/agent.helper";
import { encryptPassword, decryptPassword } from "../helpers/securePassword";
import { generateAuthToken, dataFromToken } from "../helpers/tokens";
import mailer from "../helpers/send.email.helper";
import { sendMessage } from "../utils/sendSMS";
import agentServices from "../services/agent.services";
import BookingServices from "../services/booking.services";
import checkAgentEmailpassword from "../middlewares/agent.auth";

import response from "../helpers/response";

export const createAgent = catchAsyncErr(async (req, res, next) => {
  let {
    firstName,
    lastName,
    email,
    password,
    tel,
    nationality,
    modePay1,
    accountNmbr1,
    modePay2,
    accountNmbr2,
    locDistrict,
    photo,
    rePassword,
  } = req.body;
  // if (!validator.isEmail(email)) {
  //   return next(new appError(400, 'Please your email is not valid!'));
  // }

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    tel === "" ||
    nationality === "" ||
    password === "" ||
    locDistrict === ""
  ) {
    return next(new appError(400, "Please fill all data cleary!"));
  }

  if (password !== rePassword) {
    return next(new appError(400, "Please try again password does not match"));
  }
  const agents = await agentServices.getAndCountAllAgents();
  const agentCode = agents.count + 1 + codeGenerator.passwordGenerator();
  password = await encryptPassword(password);
  const newAgent = {
    firstName,
    lastName,
    email,
    password,
    tel,
    nationality,
    modePay1,
    accountNmbr1,
    modePay2,
    accountNmbr2,
    photo,
    agentCode,
    amount: 0,
    role: "agent",

    // bio,
  };

  const newUserAgent = await db.agent.create(newAgent);
  const token = generateAuthToken({
    id: newUserAgent.id,
    agentEmail: newUserAgent.email,
  });

  const emailView = mailer.welcomeDoctorView(email, firstName);
  mailer.sendEmail(email, "Welcome email", emailView);

  res.status(201).json({
    message: "Agent Created success",
    data: newUserAgent,
    token,
  });
});

export const signin = async (req, res) => {
  await checkAgentEmailpassword(req, res);
};
export const activateAgent = async (req, res) => {
  try {
    const id = req.params.agentId;
    const updated = await agentServices.activateAgent(id);
    const agentData = await agentServices.getAgentById(id);
    const { firstName } = agentData.dataValues;
    const emailView = mailer.acceptAgent(firstName);
    mailer.sendEmail(agentData.dataValues.email, "Onboard Email", emailView);
    return response.successMessage(
      res,
      "agent was activated successfully",
      200
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const deactivateAgent = async (req, res) => {
  try {
    const id = req.params.agentId;
    const updated = await agentServices.deactivateAgent(id);
    return response.successMessage(
      res,
      "Agent was activated successfully",
      200
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const getAllAgents = async (req, res) => {
  try {
    const agents = await agentServices.getAllAgents();
    return response.successMessage(
      res,
      "Get All Agents succefully",
      200,
      agents
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const getAllAgentById = async (req, res) => {
  try {
    const id = req.params.agentId;
    const agent = await agentServices.getAgentById(id);
    return response.successMessage(
      res,
      "agent was activated successfully",
      200,
      agent
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const checkSpecificAgentBalance = async (req, res) => {
  try {
    const { agentCode } = req.user;
    const agents = await agentServices.getAgentsCash(agentCode);
    let unpaidAmount = 0;
    let totalAmount = 0;
    let agentDatas = [];
    if (agents) {
      agents.map(async (agentData, index) => {
        totalAmount += parseInt(agentData.dataValues.amount);
        agentDatas.push(agentData.dataValues);
        if (agentData.dataValues.isPaid === false) {
          unpaidAmount += parseInt(agentData.dataValues.amount);
        }
      });
    
      const returnData = {
        totalAmount,
        unpaidAmount,
        agentDatas,
      };
      return response.successMessage(
        res,
        "agent cash flow was returned successfully",
        200,
        returnData
      );
    }
    return response.errorMessage(
      res,
      "Ooops you dont have any cas history yet",
      404
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const getAllAgentCashes = async (req, res) => {
  try {
    const { status } = req.query;

    const agents =
      status !== undefined
        ? await agentServices.getAllAgentCashesByStatus(status)
        : await agentServices.getAllAgentsCash();
    let agentData = [];
    if (agents.length !== 0) {
      agents.map(async (data, index) => {
        agentData.push(data.dataValues);
      });
      return response.successMessage(
        res,
        "agent cash was returned successfully",
        200,
        agentData
      );
    } else {
      return response.errorMessage(
        res,
        "Ooops you dont have any cashes yet",
        404
      );
    }
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const adminChangeBalanceStatus = async (req, res) => {
  try {
    const id = req.params.balanceId;
    const { status } = req.query;
    if (id === undefined) {
      return response.errorMessage(res, "Please provide balance id first", 400);
    }
    if (status === undefined) {
      return response.errorMessage(
        res,
        "Please provide balance status first",
        400
      );
    }
    const isUpdated = await agentServices.adminChangeBalanceStatus(id, status);

    return response.successMessage(
      res,
      "agent balance was status changed successfully",
      200
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const agentChangeBalanceStatus = async (req, res) => {
  try {
    const id = req.params.balanceId;
    const { status } = req.query;
    if (id === undefined) {
      return response.errorMessage(res, "Please provide balance id first", 400);
    }
    if (status === undefined) {
      return response.errorMessage(
        res,
        "Please provide balance status first",
        400
      );
    }
    const isUpdated = await agentServices.adminChangeBalanceStatus(id, status);

    return response.successMessage(
      res,
      "agent balance was status changed successfully",
      200
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};

export const agentAcceptBalanceStatus = async (req, res) => {
  try {
    const id = req.params.balanceId;
    if (id === undefined) {
      return response.errorMessage(res, "Please provide balance id first", 400);
    }
    const isUpdated = await agentServices.agentAcceptBalanceStatus(id);

    return response.successMessage(
      res,
      "agent balance was accepted successfully",
      200
    );
  } catch (error) {
    return response.errorMessage(res, error.message, 500);
  }
};