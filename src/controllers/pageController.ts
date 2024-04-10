import { Request, Response } from 'express';
import Champion from '../database/schemas/Champion';
import { champions } from '../utils/championsList';
import { mountData } from '../utils/mountData';
import { mountNewData } from '../utils/mountNewData';

// TODO: A route to add a new champion.
// TODO: A route to edit a existent champion.

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

// ? Controller that adds a new champion in the data base
// ! The roles and types must be send in a string with comma. Ex.: "adc,sup,top" - "ad,tank"
export const addNewChampion = async (req: Request, res: Response) => {
	const { role, type, ranged, name, nameBase } = req.body;

	if(!name && !nameBase) return res.status(400).send({status: 'error', message: 'Please, send all information.'});
	
	try {
		const match = mountNewData({name, nameBase, role, type, ranged});
		const result = await Champion.create(match);
		res.status(200).send({status: 'OK', newChampion: result});
	} catch (error) {
		console.log(error);
		res.status(400).send({status: 'error'});
	}
}