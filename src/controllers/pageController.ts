import { Request, Response } from 'express';
import Champion from '../models/Champion';
import { champions } from '../utils/champions';

export const ping = (req: Request, res: Response) => {
	console.log('Sucess');
	res.send({ pong: true });
};

// ! Controller that adds the champions, will cause error
export const addAllCharacters = async (req: Request, res: Response) => {
	try {
		const result = await Champion.insertMany(champions, {ordered: true});
		console.log(result);
		res.send({status: 'ok', champios: result});
	} catch (error) {
		console.log(error);
		res.send({status: 'erro'})
	}
};