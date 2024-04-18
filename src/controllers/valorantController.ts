import { Request, Response } from 'express';
import Agent from '../database/schemas/Valorant-Agent';
import { agents } from '../utils/agentList';
import { mountAgentData } from '../utils/mountAgentData';

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

// ? Controller that returns a random champion
export const getRandomAgent = async (req: Request, res: Response) => {
	const { role } = req.body;

	try {
		const match = mountAgentData({ role });
		const result = await Agent.aggregate([
			{ $match: match },
			{ $sample: { size: 1 } },
		]);
		if(result.length > 0) return res.send({ requirements: match, result });
		res.status(404).send({requirements: match, status: 'There is none agent with your requirements.'});
	} catch (error) {
		console.log(error);
		res.status(400).send({ status: 'error' });
	}
};