import { ChampionType } from '../types/championsTypes';

export type championQuery = {
  name: string;
  nameBase: string;
	type?: 'ad' | 'ap' | 'tank';
	ranged?: 'true' | 'false';
	role?: 'top' | 'jg' | 'mid' | 'adc' | 'sup';
}

type RolesType = 'top' | 'jg' | 'mid' | 'adc' | 'sup';
type TypeDamageType = 'ad' | 'ap' | 'tank';



export const mountNewData = ({name, nameBase, role, type, ranged}: championQuery) => {
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
    const roleArray = role.split(',') as RolesType[];
    for (let i = 0; i < roleArray.length; i++) {
      match[roleArray[i]] = true;
    }
  };
  if (type !== undefined) {
    const typeArray = type.split(',') as TypeDamageType[];
    for (let i = 0; i < typeArray.length; i++) {
      match[typeArray[i]] = true;
    }
  };
	if (ranged !== undefined) match.ranged = ranged === 'true' ? true : false;
	return match;
}