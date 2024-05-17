import Agent from '../database/schemas/Valorant-Agent';
import { agents } from '../utils/agentList';

export const addAllAgentsFunction = async () => {
	try {
		const info = await Agent.findOne({name: 'Cypher'});
		if(info) return console.log('Agents already exists.');
		const result = await Agent.insertMany(agents, { ordered: true });
		console.log(result);
		return result;
	} catch (error) {
		console.log(error);
	}
}