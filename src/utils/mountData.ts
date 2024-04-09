import { championQuery } from '../types/championQueryType';

export const mountData = ({role, type, range}: championQuery): championQuery => {
	const match: championQuery = {};

	if (role !== undefined) match.role = role;
	if (type !== undefined) match.type = type;
	if (range !== undefined) match.range = range;

	return match;
}