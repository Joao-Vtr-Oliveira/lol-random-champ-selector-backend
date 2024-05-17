import Champion from '../database/schemas/Champion';
import { champions } from './championsList';

export const addAllCharacters = async () => {
  try {
		const result = await Champion.insertMany(champions, { ordered: true });
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}