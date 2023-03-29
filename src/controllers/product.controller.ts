import { Request, Response } from 'express';
import {
	deleteProduct,
	getProduct,
	getProducts,
	insertProduct,
	updateProduct,
} from '../services/product';
import { handleHttp } from '../utils/error.handle';

const getItem = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const responseProduct = await getProduct(id);
		const data = responseProduct ? responseProduct : 'NOT_FOUND';
		res.send(data);
	} catch (e) {
		handleHttp(res, 'Error al obtener producto', e);
	}
};

const getItems = async (req: Request, res: Response) => {
	try {
		const responseProducts = await getProducts();
		res.send(responseProducts);
	} catch (e) {
		handleHttp(res, 'Error al obtener los productos', e);
	}
};

const updateItem = async ({ params, body }: Request, res: Response) => {
	try {
		const { id } = params;
		const response = await updateProduct(id, body);
		res.send(response);
	} catch (e) {
		handleHttp(res, 'Error al actualizar el producto', e);
	}
};

const deleteItem = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const responseProduct = await deleteProduct(id);
		res.send(responseProduct);
	} catch (e) {
		handleHttp(res, 'Error al eliminar el producto', e);
	}
};

const postItem = async ({ body }: Request, res: Response) => {
	try {
		const responseProduct = await insertProduct(body);
		res.send(responseProduct);
	} catch (e) {
		handleHttp(res, 'Error al enviar el producto', e);
	}
};

export { getItem, getItems, updateItem, deleteItem, postItem };
