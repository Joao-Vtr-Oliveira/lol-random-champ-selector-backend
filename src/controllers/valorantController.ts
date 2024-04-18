import { Request, Response } from 'express';
import Agent from '../database/schemas/Valorant-Agent';
import { agents } from '../utils/agentList';

// ! Controller that adds the agents, will cause error
export const addAllAgents = async (req: Request, res: Response) => {
	try {
		const result = await Agent.insertMany(agents, { ordered: true });
		console.log(result);
		res.send({ status: 'ok', champios: result });
	} catch (error) {
		console.log(error);
		res.send({ status: 'erro' });
	}
};

export const getAllAgents = async (req: Request, res: Response) => {
	try {
		const agents = await Agent.find({});
		console.log('Agentes: ', agents);
		res.send({agents});
	} catch (error) {
		console.log('error');
		res.status(404);
	}
}