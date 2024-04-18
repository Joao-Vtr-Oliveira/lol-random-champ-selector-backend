import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
	console.log('Sucess');
	res.send({ pong: true });
};