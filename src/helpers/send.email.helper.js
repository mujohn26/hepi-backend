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
                <div class="Email-wrapper_body_message">We are excited to have you on Hepi platfoam. Please you have  to pay ${ammountToPay} frw, to get Password that allows you  to continue with application . <br>
    
                <br>  </br>  </br>  <span id="thanks" style="margin-top: 20px;">HEPI we are ready to serve you. Please let Us know u have done with this payment</span> 
                 <br><br> Our Payment method: <br> ${accountName1}: ${accountCode1} <br> ${accountName2}: ${accountCode2}</div>
            </div>
   
        </div>
        </body>
        </html>`;
    return view;
  }

  /**
  * <a href="${process.env.BASE_URL_REACT}/auth/activate/?token=${token}" class="Email-wrapper_button" style="cursor: pointer !important; justify-self: center; margin-left: 80px; text-decoration: none; color: white;">Activate Account</a>
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
