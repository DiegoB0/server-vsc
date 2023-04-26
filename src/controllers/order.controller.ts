import { Request, Response } from 'express';
import {
	completeOrder,
	deleteOrder,
	getOrder,
	getOrders,
	insertOrder,
	updateOrder,
} from '../services/order';
import { handleHttp } from '../utils/error.handle';

const getItem = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const responseOrder = await getOrder(id);
		const data = responseOrder ? responseOrder : 'NOT_FOUND';
		res.send(data);
	} catch (e) {
		handleHttp(res, 'Error al obtener la orden', e);
	}
};

const getItems = async (req: Request, res: Response) => {
	try {
		const responseOrders = await getOrders();
		res.send(responseOrders);
	} catch (e) {
		handleHttp(res, 'Error al obtener las ordenes', e);
	}
};

const updateItem = async ({ params, body }: Request, res: Response) => {
	try {
		const { id } = params;
		const response = await updateOrder(id, body);
		res.send(response);
	} catch (e) {
		handleHttp(res, 'Error al actualizar la orden', e);
	}
};

const deleteItem = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const responseOrder = await deleteOrder(id);
		res.send(responseOrder);
	} catch (e) {
		handleHttp(res, 'Error al eliminar la orden', e);
	}
};

const completeItem = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const responseOrder = await completeOrder(id);
		res.send(responseOrder);
	} catch (e) {
		handleHttp(res, 'Error al eliminar la orden', e);
	}
};

const postItem = async ({ body }: Request, res: Response) => {
	try {
		const responseOrder = await insertOrder(body);
		res.send(responseOrder);
	} catch (e) {
		handleHttp(res, 'Error al enviar la orden', e);
	}
};

export { getItem, getItems, updateItem, deleteItem, postItem, completeItem };
