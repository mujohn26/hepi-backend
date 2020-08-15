
import db from '../database/models';
import catchAsyncErr from '../utils/catchAsyncError';
import appError from '../utils/appError';
import { encryptPassword, decryptPassword } from "../helpers/securePassword";
import { generateAuthToken, dataFromToken } from "../helpers/tokens";
import validator from 'validator';
import mailer from '../helpers/send.email.helper';
import { sendMessage } from "../utils/sendSMS";
import agentServices from "../services/agent.services";

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
        locCountry,
        locProvince,
        locDistrict,
        locSector,
        photo,
        // extra,
        rePassword
    } = req.body;

    if (!validator.isEmail(email)) {
        return next(new appError(400, 'Please your email is not valid!'));
    }

    if (firstName === '' || lastName === '' || email === '' || tel === '' || nationality === '' || password === ''
        || locCountry === '' || locProvince === '' || locDistrict === '' || locSector === '') {
        return next(new appError(400, 'Please fill all data cleary!'));
    }

    if (password != rePassword) {
        return next(new appError(400, 'Please try again password does not match'));
    }

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
        locCountry,
        locProvince,
        locDistrict,
        locSector,
        photo,
        // bio,
    };

    const newUserAgent = await db.agent.create(newAgent);

    const token = generateAuthToken({
        id: newUserAgent.id,
        agentEmail: newUserAgent.email,
    });

    const emailView = mailer.welcomeDoctorView(email, firstName);
    mailer.sendEmail(email, 'Welcome email', emailView);
    await sendMessage(firstName, tel);

    res.status(201).json({
        message: "Agent Created success",
        data: newUserAgent,
        token: token,
    });

});


export const activateAgent = async (req, res) => {
    try {
        const id = req.params.agentId;
        const updated = await agentServices.activateAgent(id);
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
