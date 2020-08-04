import jwt from "jsonwebtoken";
require('dotenv').config();

export const generateAuthToken = (payload) => {
  const token = jwt.sign(
    {
      payload,
    },
    process.env.SECRETEKEY,
    { expiresIn: "1d" }
  );
  return token;
};
export const dataFromToken = (token) => {
  const mytoken = jwt.verify(token, process.env.SECRETEKEY);

  return mytoken;
};

// export default {generateAuthToken,adminIdFromToken};
