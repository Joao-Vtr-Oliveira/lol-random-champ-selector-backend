import { championQuery } from '../types/championQueryType';

export type DataType = {
  top?: boolean;
  jg?: boolean;
  mid?: boolean;
  adc?: boolean;
  sup?: boolean;
  ad?: boolean;
  ap?: boolean;
  tank?: boolean;
  ranged?: boolean;
}

// ? Lanes -> Type -> Range

export const mountData = ({role, type, ranged}: championQuery) => {
	const match: DataType = {}
	if (role !== undefined) match[role] = true;
	if (type !== undefined) match[type] = true;
	if (ranged !== undefined) match.ranged = ranged === 'true' ? true : false;
	return match;
}