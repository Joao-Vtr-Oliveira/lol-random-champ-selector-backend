export type AgentType = {
  name: string;
  controller: boolean;
  duelist: boolean;
  sentinel: boolean;
  initiator: boolean;
}

export type Role = 'controller' | 'duelist' | 'sentinel' | 'initiator'