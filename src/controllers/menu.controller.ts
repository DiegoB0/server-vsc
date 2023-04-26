import { Request, response, Response } from 'express';
import {
	deleteMenu,
	getMenu,
	getMenus,
	insertMenu,
	updateMenu,
} from '../services/menu';
import { handleHttp } from '../utils/error.handle';

const getItem = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const responseOrder = await getMenu(id);
		const data = responseOrder ? responseOrder : 'NOT_FOUND';
		res.send(data);
	} catch (e) {
		handleHttp(res, 'Error al obtener la orden', e);
	}
};

const getItems = async (req: Request, res: Response) => {
	try {
		const responseOrders = await getMenus();
		res.send(responseOrders);
	} catch (e) {
		handleHttp(res, 'Error al obtener las ordenes', e);
	}
};

const updateItem = async ({ params, body }: Request, res: Response) => {
	try {
		const { id } = params;
		const response = await updateMenu(id, body);
		res.send(response);
	} catch (e) {
		handleHttp(res, 'Error al actualizar la orden', e);
	}
};

const deleteItem = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const responseOrder = await deleteMenu(id);
		res.send(responseOrder);
	} catch (e) {
		handleHttp(res, 'Error al eliminar la orden', e);
	}
};

const postItem = async ({ body }: Request, res: Response) => {
	try {
		const responseOrder = await insertMenu(body);
		res.send(responseOrder);
	} catch (e) {
		handleHttp(res, 'Error al enviar la orden', e);
	}
};

export { getItem, getItems, updateItem, deleteItem, postItem };
