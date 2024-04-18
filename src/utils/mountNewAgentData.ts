import { AgentType, Role } from '../types/agentType';

interface AgentNewQuery {
  name: string;
  role: Role;
}

const roleArray: Role[] = ['controller', 'duelist', 'initiator', 'sentinel'];

export const mountNewAgentData = ({name, role}: AgentNewQuery) => {
	const match: AgentType = {
    name,
    controller: false,
    initiator: false,
    duelist: false,
    sentinel: false,
  }

  if (role !== undefined) {
    for (let i = 0; i < roleArray.length; i++) {
      if(role === roleArray[i]) match[roleArray[i]] = true;
    }
  };

	return match;
}