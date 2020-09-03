/* eslint-disable import/prefer-default-export */

const dotenv = require('dotenv');

dotenv.config();
export const sendMessage = async (clientName, clientPhone) => {
  const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_ID,
    process.env.TWILIO_AUTH_TOKEN
  );
  const message = `Dear ${clientName}, your Request on Health Escort Patient Initiative (HEPI) has been sent Succefully, Admin will contact you for fulther information, #StaySafe `;
  await client.messages.create({
    body: message,
    from: `${process.env.TWILIO_CONTACT}`,
    to: `${clientPhone}`,
  });
};
