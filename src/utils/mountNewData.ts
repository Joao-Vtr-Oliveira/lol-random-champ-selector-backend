import { ChampionQuery } from '../types/championQueryType';
import { ChampionType, RolesType, TypeDamageType } from '../types/championsTypes';

interface ChampionNewQuery extends ChampionQuery {
  name: string;
  nameBase: string;
}

export const mountNewData = ({name, nameBase, role, type, ranged}: ChampionNewQuery) => {
	const match: ChampionType = {
    name,
    nameBase,
    top: false,
    jg: false,
    mid: false,
    adc: false,
    sup: false,
    ad: false,
    ap: false,
    tank: false,
    ranged: false,
  }

  if (role !== undefined) {
    const roleWithoutLastcomma = role.replace(/.$/, '');
    const roleArray = roleWithoutLastcomma.split(',') as RolesType[];
    for (let i = 0; i < roleArray.length; i++) {
      match[roleArray[i]] = true;
    }
  };
  if (type !== undefined) {
    const typeWithoutLastcomma = type.replace(/.$/, '');
    const typeArray = typeWithoutLastcomma.split(',') as TypeDamageType[];
    for (let i = 0; i < typeArray.length; i++) {
      match[typeArray[i]] = true;
    }
  };
	if (ranged !== undefined) match.ranged = ranged === 'true' ? true : false;
	return match;
}