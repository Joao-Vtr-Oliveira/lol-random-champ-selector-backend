type RolesType = 'top' | 'jg'| 'mid' | 'adc' | 'sup';
type DamageType = 'ad' | 'ap' | 'tank';
type RangeType = 'melee' | 'ranged';

export type ChampionType = {
  name: string;
  role: RolesType[];
  type: DamageType[];
  nameBase: string;
  range: RangeType[];
}