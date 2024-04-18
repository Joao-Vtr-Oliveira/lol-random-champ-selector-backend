import { Request, Response } from 'express';
import Agent from '../database/schemas/Valorant-Agent';
import { agents } from '../utils/agentList';
import { mountAgentData } from '../utils/mountAgentData';
import { mountNewAgentData } from '../utils/mountNewAgentData';
import { Role } from '../types/agentType';

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

// ? Controller that returns all agents.

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

// ? Controller that adds a new champion in the data base
export const addNewAgent = async (req: Request, res: Response) => {
	const { name } = req.body;
  const role = req.body.role as Role;

	if(!role || !name) return res.status(400).send({status: 'error', message: 'Please, send the agent role and name.'});
  if(role !== 'controller' && role !== 'duelist' && role !== 'initiator' && role !== 'sentinel') return res.status(400).send({status: 'error', message: 'Please, send a valid role'});
  
	try {
		const match = mountNewAgentData({name, role});
		const result = await Agent.create(match);
		res.status(200).send({status: 'OK', newChampion: result});
	} catch (error) {
		console.log(error);
		res.status(400).send({status: 'error', message: error});
	}
}

// // Controller that deletes a champion
// export const deleteChampion = async (req: Request, res: Response) => {
// 	const name = req.body.name;
// 	if(!name) return res.status(400).send({status: 'error', message: 'Please, send the champion\'s name.'});
// 	try {	
// 		const result = await Champion.findOne({name});
// 		console.log('Apagando o campeão: ', result);
// 		if(result === null) return res.status(404).send({status: 'error', message: `There is no ${name} champion in DB`});
// 		await result?.deleteOne();
// 		res.status(201).send({status:'OK', message: `${name} was deleted`});
// 	} catch(error) {
// 		console.log(error);
// 		res.status(400).send({status: 'error'});
// 	}
// }