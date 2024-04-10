export type ChampionType = {
  name: string;
  nameBase: string;
  top: boolean;
  jg: boolean;
  mid: boolean;
  adc: boolean;
  sup: boolean;
  ad: boolean;
  ap: boolean;
  tank: boolean;
  ranged: boolean;
}

export interface ChampionMountType {
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

export type RolesType = 'top' | 'jg' | 'mid' | 'adc' | 'sup';
export type TypeDamageType = 'ad' | 'ap' | 'tank';