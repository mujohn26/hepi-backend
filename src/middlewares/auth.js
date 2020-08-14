import response from '../helpers/response';
import UserServices from '../services/user.services';
import {decryptPassword} from '../helpers/securePassword';
import {generateAuthToken} from '../helpers/tokens';

const checkEmailpassword = async (req, res) => {
  const user = await UserServices.findAdminByEmail(req.body.email);
  if (user == null) {
    const status = 404;
    return response.errorMessage(res, 'Could not found the user in our system', status);
  }
  if (!decryptPassword(req.body.password, user.password)) {
    const status = 401;
    return response.errorMessage(
      res,
      'Email or password does not match',
      status,
    );
  }
  const token = generateAuthToken({

    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    primaryLanguageId: user.primaryLanguageId,
    email: req.body.email,
    role: user.role,
    isVerified: user.isVerified,
  });
  const data = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: req.body.email,
    role: user.role,
    isVerified: user.isVerified,
    primaryLanguageId: user.primaryLanguageId,
    token,
  };
  return response.successMessage(
    res,
    'user has logged in successfully',
    200,
    data,
  );
};
export default checkEmailpassword;
