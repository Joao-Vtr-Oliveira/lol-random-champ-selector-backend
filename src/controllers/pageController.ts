import { Request, Response } from 'express';
import Champion from '../models/Champion';
import { champions } from '../utils/champions';
import { mountData } from '../utils/mountData';

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

// ? Controller that returns a random champion
export const getChampion = async (req: Request, res: Response) => {
	const {role, type, range} = req.body;
	
	try {
		const match = mountData({role, type, range});
		const result = await Champion.aggregate([
			{$match: match},
			{$sample: {size: 1}}
		])
		console.log(result);
		res.send({result});
	} catch (error) {
		console.log(error);
		res.send({status: 'error'});
	}
}