
import db from '../database/models';
import catchAsyncErr from '../utils/catchAsyncError';
import appError from '../utils/appError';
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

const newAdmin = {
    firstName,
    lastName,
    email,
    password,
    tel,
};
// console.log(newAdmin);

const newUserAdmin = db.admin.create(newAdmin);


    res.status(201).json({
        message: "Admin Created success",
        data: newAdmin,
        // token: token,
    });

});