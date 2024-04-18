import { Schema, model, connection, Model } from 'mongoose';
import { AgentType } from '../../types/agentType';

const schema = new Schema<AgentType>({
	name: { type: String, required: true, unique: true },
	controller: { type: Boolean, required: true, default: false },
	duelist: { type: Boolean, required: true, default: false },
	initiator: { type: Boolean, required: true, default: false },
	sentinel: { type: Boolean, required: true, default: false },
});

const modelName: string = 'valorant-agent';

export default connection && connection.models[modelName]
	? (connection.models[modelName] as Model<AgentType>) // Se o model já possui, retorne ele
	: model<AgentType>(modelName, schema); // Se não possui, crie e retorne
