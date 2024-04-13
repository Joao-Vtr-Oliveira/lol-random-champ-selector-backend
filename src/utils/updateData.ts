import { ChampionQuery } from '../types/championQueryType';
import { ChampionMountType, RolesType, TypeDamageType } from '../types/championsTypes';


interface ChampionUpdateQuery extends ChampionQuery {
  name: string;
  nameBase?: string;
}

interface ChampionUpdateType extends ChampionMountType {
  name: string;
  nameBase?: string;
}

export const mountUpdatedData = ({name, nameBase, role, type, ranged}: ChampionUpdateQuery) => {
	const match: ChampionUpdateType = {
    name
  }

  if (role !== undefined) {
    match.top = false;
    match.jg = false;
    match.mid = false;
    match.adc = false;
    match.sup = false;
    const roleWithoutLastcomma = role.replace(/.$/, '');
    const roleArray = roleWithoutLastcomma.split(',') as RolesType[];
    for (let i = 0; i < roleArray.length; i++) {
      match[roleArray[i]] = true;
    }
  };
  if (type !== undefined) {
    match.ad = false;
    match.ap = false;
    match.tank = false;
    const typeWithoutLastcomma = type.replace(/.$/, '');
    const typeArray = typeWithoutLastcomma.split(',') as TypeDamageType[];
    for (let i = 0; i < typeArray.length; i++) {
      match[typeArray[i]] = true;
    }
  };
	if (ranged !== undefined) match.ranged = ranged === 'true' ? true : false;
  if (nameBase !== undefined) match.nameBase = nameBase;
	return match;
}