import { ChampionQuery } from '../types/championQueryType';
import { ChampionMountType } from '../types/championsTypes';

export const mountData = ({role, type, ranged}: ChampionQuery) => {
	const match: ChampionMountType = {}
	if (role !== undefined) match[role] = true;
	if (type !== undefined) match[type] = true;
	if (ranged !== undefined) match.ranged = ranged === 'true' ? true : false;
	return match;
}