import { Role } from '../types/agentType';

type AgentMountType = {
	controller?: boolean;
	initiator?: boolean;
	sentinel?: boolean;
	duelist?: boolean;
}


export const mountAgentData = ({ role }: {role: Role}) => {
	const match: AgentMountType = {}
	if (role !== undefined) match[role] = true;
	return match;
}