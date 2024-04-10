import { Request, Response } from 'express';
import Champion from '../database/schemas/Champion';
import { champions } from '../utils/championsList';
import { mountData } from '../utils/mountData';

export const ping = (req: Request, res: Response) => {
	console.log('Sucess');
	res.send({ pong: true });
};

// ! Controller that adds the champions, will cause error
export const addAllCharacters = async (req: Request, res: Response) => {
	try {
		const result = await Champion.insertMany(champions, { ordered: true });
		console.log(result);
		res.send({ status: 'ok', champios: result });
	} catch (error) {
		console.log(error);
		res.send({ status: 'erro' });
	}
};

// ? Controller that returns a random champion
export const getChampion = async (req: Request, res: Response) => {
	const { role, type, ranged } = req.body;

	try {
		const match = mountData({ role, type, ranged });
		const result = await Champion.aggregate([
			{ $match: match },
			{ $sample: { size: 1 } },
		]);
		if(result.length > 0) return res.send({ requirements: match, result });
		res.status(404).send({requirements: match, status: 'There is none champion with your requirements.'});
	} catch (error) {
		console.log(error);
		res.status(400).send({ status: 'error' });
	}
};

// ? Controller that returns all champions
export const getAllChampions = async (req: Request, res: Response) => {
	try {
		const result = await Champion.find({});
		res.send({ result });
	} catch (error) {
		console.log(error);
		res.status(400).send({ status: 'error' });
	}
};
