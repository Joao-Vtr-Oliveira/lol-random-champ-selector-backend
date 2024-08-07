import { ConnectOptions, connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoHost = process.env.MONGODB;
const mongoPort = 27017;

let url: string;
if(!mongoHost) url = `mongodb://${mongoHost}:${mongoPort}`;
url = process.env.MONGO_URL || 'mongodb://localhost:27017/lol-random-champ-selector-project';

const mongoDatabase = 'mydb';

export const mongoConnect = async () => {
  try {
    console.log('Conectando ao MongoDB...');
    console.log(url);
    await connect(url);
    console.log('MongoDB conectado com sucesso!');
  } catch(error) {
    console.log(`Erro conexão mongoDB:`, error);
  }
};
