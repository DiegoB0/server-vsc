import { Request, Response } from 'express';
import {
	deleteUser,
	getUser,
	getUsers,
	insertUser,
	updateUser,
} from '../services/user';
import { handleHttp } from '../utils/error.handle';

const getItem = (req: Request, res: Response) => {
	try {
	} catch (e) {
		handleHttp(res, 'Error al obtener producto');
	}
};

const getItems = async (req: Request, res: Response) => {
	try {
		const responseUsers = await getUsers();
		res.send(responseUsers);
	} catch (e) {
		handleHttp(res, 'Error al obtener los productos');
	}
};

const updateItem = (req: Request, res: Response) => {
	try {
	} catch (e) {
		handleHttp(res, 'Error al actualizar el producto');
	}
};

const deleteItem = (req: Request, res: Response) => {
	try {
	} catch (e) {
		handleHttp(res, 'Error al eliminar el producto');
	}
};

const postItem = ({ body }: Request, res: Response) => {
	try {
		res.send(body);
	} catch (e) {
		handleHttp(res, 'Error al enviar el producto');
	}
};

export { getItem, getItems, updateItem, deleteItem, postItem };
