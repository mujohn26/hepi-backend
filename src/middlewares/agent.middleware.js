import agentServices from "../services/agent.services";
import response from "../helpers/response";

class agentMiddleware {
  static async checkIfAgentIsActive(req, res, next) {
    const id = req.params.agentId;
    const agent = await agentServices.getAgentById(id);
    const status = agent.dataValues.status;
    if (status === "active") {
      const status = 401;
      return response.errorMessage(res, "That user is already active", status);
    }
    return next();
  }

  static async checkIfAgentIsInactive(req, res, next) {
    const id = req.params.agentId;
    const agent = await agentServices.getAgentById(id);
    const status = agent.dataValues.status;
    if (status === "inactive") {
      const status = 401;
      return response.errorMessage(res, "That user is already inactive", status);
    }
    return next();
  }
}

export default agentMiddleware;
