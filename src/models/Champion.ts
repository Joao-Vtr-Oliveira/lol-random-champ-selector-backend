import { Schema, model, connection, Model } from 'mongoose';

type Roles = 'top' | 'jg'| 'mid' | 'adc' | 'sup';
type DamageType = 'ad' | 'ap' | 'tank';
type Range = 'melee' | 'ranged';

export type ChampionType = {
  name: string;
  role: Roles[];
  type: DamageType[];
  nameBase: string;
  range: Range[];
}

const schema = new Schema<ChampionType>({
  name: {type: String, required: true, unique: true},
  role: {type: [String], required: true, enum: ['top', 'jg', 'mid', 'adc', 'sup']},
  type: {type: [String], required: true, enum: ['ad', 'ap', 'tank']},
  nameBase: {type: String, required: true, unique: true},
  range: {type: [String], required: true, enum: ['melee', 'ranged']}
});

const modelName: string = 'Champion';

export default (connection && connection.models[modelName]) ?
  connection.models[modelName] as Model<ChampionType> // Se o model já possui, retorne ele
  :
  model<ChampionType>(modelName, schema) // Se não possui, crie e retorne