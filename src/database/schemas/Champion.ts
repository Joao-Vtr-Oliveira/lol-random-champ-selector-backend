import { Schema, model, connection, Model } from 'mongoose';
import { ChampionType } from '../../types/championsTypes';

const schema = new Schema<ChampionType>({
	name: { type: String, required: true, unique: true },
	top: { type: Boolean, required: true },
	jg: { type: Boolean, required: true },
	mid: { type: Boolean, required: true },
	adc: { type: Boolean, required: true },
	sup: { type: Boolean, required: true },
	ad: { type: Boolean, required: true },
	ap: { type: Boolean, required: true },
	tank: { type: Boolean, required: true },
	ranged: { type: Boolean, required: true },
	nameBase: { type: String, required: true, unique: true },
});

const modelName: string = 'Champion';

export default connection && connection.models[modelName]
	? (connection.models[modelName] as Model<ChampionType>) // Se o model já possui, retorne ele
	: model<ChampionType>(modelName, schema); // Se não possui, crie e retorne
