
import db from '../database/models';
import catchAsyncErr from '../utils/catchAsyncError';
import appError from '../utils/appError';
import { encryptPassword, decryptPassword } from "../helpers/securePassword";
import { generateAuthToken, dataFromToken } from "../helpers/tokens";

export const createAdmin = catchAsyncErr(async(req,res,next)=>{
// console.log('create admin');
let{
    firstName,
    lastName,
    email,
    password,
    tel,
    rePassword
    }= req.body;
if(firstName===''|| lastName==='' || email===''|| password===''||tel===''){
    return next( new appError(400,'Please fill all data cleary!'));}

if(password != rePassword){
    return next (new appError(400, 'Please try again password does not match'));}

    password = await encryptPassword(password);
const newAdmin = {
    firstName,
    lastName,
    email,
    password,
    tel,
};

const newUserAdmin = await db.admin.create(newAdmin);

    const token = generateAuthToken({
        id: newAdmin.id,
        adminEmail: newUserAdmin.email,
    });
    res.status(201).json({
        message: "Admin Created success",
        data: newAdmin,
        token: token,
    });

});