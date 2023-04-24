import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import responseTime from 'response-time';
import { Server as WebSocketServer } from 'socket.io';
import db from './config/mongo';
import { router } from './routes';
import { createRoles } from './utils/createRoles.handle';

const PORT = process.env.PORT || 3002;
const SOCKETSPORT = process.env.SOCKETS_PORT || 3003;

const app = express();
createRoles();

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(responseTime());

//Rutas
app.use(router);

//Mongo DB
db().then(() => console.log('Database connected'));

//Redis DB

//Server
app.listen(PORT, () => console.log(`Server on port: ${PORT}`));

//Sockets config
const server = http.createServer(app);
export const io = new WebSocketServer(server, {
	cors: {
		origin: '*',
	},
});

io.on('connection', () => {
	console.log('New user');
});

server.listen(SOCKETSPORT, () =>
	console.log(`SocketServer on port ${SOCKETSPORT}`)
);
