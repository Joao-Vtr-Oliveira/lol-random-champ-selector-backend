import Champion from '../database/schemas/Champion';
import { champions } from './championsList';

export const addAllCharactersFunction = async () => {
  try {
    const info = await Champion.findOne({name: 'Bard'});
    if(info) return console.log('Champions already exists.');
		const result = await Champion.insertMany(champions, { ordered: true });
		console.log(result);
    return result;
	} catch (error) {
		console.log(error);
	}
}