import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import mainRoutes from './routes/script';
import { mongoConnect } from './database/mongo';
import { addAllCharacters } from './utils/addAllCharacters';

dotenv.config();
mongoConnect();
addAllCharacters();

const server = express();
server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send('Page not found');
})

server.listen(3000);