/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import nodemailer from 'nodemailer';

const dotenv = require('dotenv');

dotenv.config();

/**
 * Class for dealing with email activities
 */
class mailer {
  /**
   * signup a user and saving user data in the database
   * @param {Object} token a token from contains user details
   * @param {Object} userName a userName of the user registered
   * @returns {Object} An email template contains message of the user
   */
  static contactusView(names, email, message) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 90%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
            color: blue;
            font-size:40px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_log">HePi Ltd</div>
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Hi! am ${names} ( ${email})</div>
                <div class="Email-wrapper_body_message">Message: <br>
    
                <br>  <span id="thanks" style="margin-top: 20px;"> ${message} <br>:</span> 
                 </div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }

  static welcomeDoctorView(email, firstName) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 90%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
            color: blue;
            font-size:40px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_log">HePi Ltd</div>
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Dear, ${firstName} ( ${email})</div>
                <div class="Email-wrapper_body_message">Message: <br>
    
                <br>  <span id="thanks" style="margin-top: 20px;"> Welcome to Health Escort Patients Initiative (Hepi) <br>  Your registration request has been received. <br> For further information our admin will contact you soon. <br><br> Stay safe. <br><br> <a>www.mperekeza.com </a></span> 
                 </div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }

  static activateAccountView(
    email,
    userName,
    ammountToPay,
    accountName1,
    accountName2,
    accountCode1,
    accountCode2
  ) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 90%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
            color: blue;
            font-size:40px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_log">HePi Ltd</div>
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Hi ${userName} <${email}>!</div>
                <div class="Email-wrapper_body_message">We are excited to have you on Health Escort Patient Initiative (HEPI). <br> Your HEPI request has received succesfully <br>
    
                <br>  </br>  </br>  <span id="thanks" style="margin-top: 20px;">Our Admin will contact you for further information <br> Keep in touch, Stay Safe. <br>:</span> 
                 </div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }

  static bookingRequestEmail(email, firstName, price) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 90%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
            color: blue;
            font-size:30px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_log">HEPi Ltd</div>
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Dear, ${firstName}</div>    
                <br>  <span id="thanks" style="margin-top: 20px;"> Thanks for booking service with Health Escort Patients Initiative (Hepi) <br>  Your booking request has been received.one of our team is going to contact you right now for further process. <br><br> In mean time your payment will be <b>${price} Rwf</b> for the whole service. <br><br> Stay safe. <br><br> <a>www.mperekeza.com </a></span> 
                 </div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }

  static adversoryAndCounselingRequestEmail(email, firstName, price, type) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 90%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
            color: blue;
            font-size:30px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_log">HEPi Ltd</div>
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Dear, ${firstName}</div>    
                <br>  <span id="thanks" style="margin-top: 20px;"> Thanks for requesting service with Health Escort Patients Initiative (Hepi) <br>  Your ${type} request has been received.one of our team is going to contact you right now for further process. <br><br> In mean time your payment will be <b>${price} Rwf</b> for the whole service. <br><br> Stay safe. <br><br> <a>www.mperekeza.com </a></span> 
                 </div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }


  static subscribingVisit(email, chefFamilyNames, price) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 90%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
            color: blue;
            font-size:30px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_log">HEPi Ltd</div>
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Dear, ${chefFamilyNames}</div>    
                <br>  <span id="thanks" style="margin-top: 20px;"> Thank you for subscribing for our home visit program <br>  Your request has been received. we are going to make follow up on it. <br><br> In mean time your payment will be <b>${price} Rwf</b> per week. <br><br> Stay safe. <br><br> <a>www.mperekeza.com </a></span> 
                 </div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }

  static mperekezaService(email, lastName, price) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 90%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
            color: blue;
            font-size:30px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_log">HEPi Ltd</div>
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Dear, ${lastName}</div>    
                <br>  <span id="thanks" style="margin-top: 20px;"> Thank you for subscribing for our mperekeza program <br>  Your request has been received. we are going to make follow up on it. <br><br> In mean time your payment will be <b>${price} Rwf</b> per month. <br><br> Stay safe. <br><br> <a>www.mperekeza.com </a></span> 
                 </div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }

  static testimonial(name) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 90%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
            color: blue;
            font-size:30px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_log">HEPi Ltd</div>
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Dear, ${name}</div>    
                <br>  <span id="thanks" style="margin-top: 20px;"> Thank you for taking your time and give us your thought <br>  We pledge to continue serving you well. <br><br> Stay safe. <br><br> <a>www.mperekeza.com </a></span> 
                 </div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }

  static createAdmin(email, firstName, secretPassword) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 90%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
            color: blue;
            font-size:30px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .confidential-title{
            color:red;
            font-weight:bold;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_log">HEPi Ltd</div>
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Dear, ${firstName}</div>    
                <br>  <span id="thanks" style="margin-top: 20px;"> Your Admin account on HEPI platform was created successfully below are the credentials you will use to login. <br><br> Email: <b>${email}</b>. <br> Password: <b>${secretPassword}</b><br> Link to login: <a>https://www.mperekeza.com/admin-panel<a/><br><br> Stay safe. <br><br><br> <div class="confidential-title">CONFIDENTIAL:</div> The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.</span> 
                 </div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }


  static acceptAgent(firstName) {
    const view = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
        .Email-wrapper{
            display:grid;
            width: 90%;
            min-height: 50px;
            margin: 10px;
           
        }
        .Email-wrapper_log{
            justify-self: start;
            margin: 10px;
            color: blue;
            font-size:30px;
        }
        .Email-wrapper_button{
            background-color: #0094FF;
            width: 40%;
            color: white;
            padding: 10px;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
        }
        .Email-wrapper_button:hover {
          cursor: pointer;
        }
        .Email-wrapper_body_message , .Email-wrapper_body_name{
        align-self: center; 
       margin-left: 25px;
       margin: 10px;
       color: gray;
        }
        .confidential-title{
            color:red;
            font-weight:bold;
        }
        .Email-wrapper_body_name{
         margin-bottom: 20px;
         margin: 10px;
        }
       #thanks{
            margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <div class="Email-wrapper">
            <div class="Email-wrapper_log">HEPi Ltd</div>
            <div class="Email-wrapper_body">
                <div class="Email-wrapper_body_name">Dear, ${firstName}</div>    
                <br>  <span id="thanks" style="margin-top: 20px;"> Your agent account with HEPI was been accepted successfully. <br>You can now login with the credentails you used when creating account if you have any problem with login don't hesitate to contact us. <br><br> Login here:<a>https://www.mperekeza.com/agent<a/> <br><br>Stay safe. <br><br><br> <div class="confidential-title">CONFIDENTIAL:</div> The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.</span> 
                 </div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }

  /**
   * This function helps to send email
   * @param {string} to this is a receiver email
   * @param {string} subject this is the subject of email to be send
   * @param {string} views this is html tages  that make body of email
   * @returns {null} return nothing
   */
  static async sendEmail(to, subject, views) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    /**
     * This is an object which include email data (mail option)
     */
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to,
      subject,
      html: views,
    };

    await transporter.sendMail(mailOptions);
  }
}

export default mailer;
