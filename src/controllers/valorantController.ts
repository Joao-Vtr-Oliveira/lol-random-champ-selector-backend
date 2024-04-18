import { Request, Response } from 'express';
import Agent from '../database/schemas/Valorant-Agent';

export const getAllAgents = async (req: Request, res: Response) => {
	try {
		const agents = await Agent.find({});
		console.log('Agentes: ', agents);
		res.send({agents});
	} catch (error) {
		console.log('erro')
		res.status(404);
	}
}