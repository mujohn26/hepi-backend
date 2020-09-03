import response from '../helpers/response';
import AgentServices from '../services/agent.services';
import {decryptPassword} from '../helpers/securePassword';
import {generateAuthToken} from '../helpers/tokens';

const checkAgentEmailpassword = async (req, res) => {
  const user = await AgentServices.findAgentByEmail(req.body.email);
  if (user == null) {
    const status = 404;
    return response.errorMessage(res, 'Could not found the user in our system', status);
  }
  if (user.dataValues.status !== 'active') {
    const status = 404;
    return response.errorMessage(res, 'Ooops your account is not active please contact admin to activate', status);
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
    email: req.body.email,
    role: user.role,
    agentCode: user.agentCode
  });
  const data = {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: req.body.email,
    role: user.role,
    token,
  };
  return response.successMessage(
    res,
    'user has logged in successfully',
    200,
    data,
  );
};
export default checkAgentEmailpassword;
