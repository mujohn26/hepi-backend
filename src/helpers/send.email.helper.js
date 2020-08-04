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
    
                <br>  <span id="thanks" style="margin-top: 20px;"> Welcome to Hospital Escort Patients Initiative (Hepi) <br>  Your registration request has been received. <br> For further information our admin will contact you soon. <br><br> Stay safe. <br><br> <a>www.rwandahospitalescort.com </a></span> 
                 </div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }


   static activateAccountView(email, userName, ammountToPay,accountName1,accountName2,accountCode1,accountCode2) {
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
                <div class="Email-wrapper_body_message">We are excited to have you on Hospital Escort Patient Initiative (HEPI). <br> Your HEPI request has received succesfully <br>
    
                <br>  </br>  </br>  <span id="thanks" style="margin-top: 20px;">Our Admin will contact you for fulther information <br> Keep in touch, Stay Safe. <br>:</span> 
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
        pass: process.env.EMAIL_PASS
      }
    });


    /**
   * This is an object which include email data (mail option)
   */
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to,
      subject,
      html: views
    };

    await transporter.sendMail(mailOptions);
  }
}

export default mailer;
