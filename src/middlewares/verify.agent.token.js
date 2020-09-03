import dotenv from 'dotenv';
import response from '../helpers/response';
import verifyTokens from '../helpers/verify.agent.token';

dotenv.config();
/**
 * verify token class
 */
class verifyToken {
  /**
   * check request params
   * @param {Object} req user request
   * @param {Object} res user response
   * @param {Object} next continue with request
   * @returns {Object} user response
   */
  static paramToken(req, res, next) {
    const token = req.params.autorizations;
    if (Number(token)) {
      return response.errorMessage(res, 'Token must not be a number', 401);
    }
    verifyTokens.verifyAllTokens(req, res, next, token);
  }

  /**
   * check request headers
   * @param {Object} req user request
   * @param {Object} res user response
   * @param {Object} next continue
   * @returns {Object} return user message
   */
  static headerToken(req, res, next) {
    if (req.headers.token === undefined) {
      return response.errorMessage(
        res,
        'Please Set The Authorization Header!',
        401,
      );
    }
    if (!/(?=^[Bb]earer)/.test(req.headers.token)) {
      return response.errorMessage(
        res,
        '"Bearer" not found Invalid token!',
        401,
      );
    }
    const token = req.headers.token.split(' ')[1];
    verifyTokens.verifyAllAgentsTokens(req, res, next, token);
  }
}
export default verifyToken;
