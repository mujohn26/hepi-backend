import bcrypt from "bcryptjs";

export const encryptPassword = async (pswd) =>
  await bcrypt.hashSync(pswd, Number(process.env.PASSWORD_SALT));
export const decryptPassword = async (userPswd, hashedPswd) =>
  await bcrypt.compareSync(userPswd, hashedPswd);
