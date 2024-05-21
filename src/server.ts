import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import mainRoutes from './routes/script';
import { mongoConnect } from './database/mongo';
import { addAllCharactersFunction } from './utils/addAllCharacters';
import { addAllAgentsFunction } from './utils/addAllAgentsFunction';

dotenv.config();
mongoConnect();


// Add champions and agents in the database.
addAllCharactersFunction();
addAllAgentsFunction();

const server = express();

server.use(cors({
  origin: '*'
}));

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send('Page not found');
})

server.listen(3000);