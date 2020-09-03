/* eslint-disable require-jsdoc */
import agentServices from '../services/agent.services';
import response from '../helpers/response';

class agentMiddleware {
  static async checkIfAgentIsActive(req, res, next) {
    const id = req.params.agentId;
    const agent = await agentServices.getAgentById(id);
    const { status } = agent.dataValues;
    if (status === 'active') {
      return response.errorMessage(res, 'That user is already active', 401);
    }
    return next();
  }

  static async checkIfAgentIsInactive(req, res, next) {
    const id = req.params.agentId;
    const agent = await agentServices.getAgentById(id);
    const { status } = agent.dataValues;
    if (status === 'inactive') {
      return response.errorMessage(res, 'That user is already inactive', 401);
    }
    return next();
  }
}

export default agentMiddleware;
