import { ConnectOptions, connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoHost = process.env.MONGODB;
const mongoPort = 27017;
const mongoDatabase = 'mydb';

export const mongoConnect = async () => {
  try {
    console.log('Conectando ao MongoDB...');
    console.log(mongoHost);
    await connect(`mongodb://${mongoHost}:${mongoPort}`);
    console.log('MongoDB conectado com sucesso!');
  } catch(error) {
    console.log(`Erro conexão mongoDB:`, error);
  }
};
