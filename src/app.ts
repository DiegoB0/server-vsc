import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import responseTime from 'response-time';
import db from './config/mongo';
import { router } from './routes';

const PORT = process.env.PORT || 4000;

const app = express();

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(responseTime());

//Rutas
app.use(router);

//Mongo DB
db().then(() => console.log('Database connected'));

app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
