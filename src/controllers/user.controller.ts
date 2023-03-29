import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';

const getProduct = (req: Request, res: Response) => {
	try {
	} catch (e) {
		handleHttp(res, 'Error al obtener producto');
	}
};

const getProducts = (req: Request, res: Response) => {
	try {
	} catch (e) {
		handleHttp(res, 'Error al obtener los productos');
	}
};

const updateProduct = (req: Request, res: Response) => {
	try {
	} catch (e) {
		handleHttp(res, 'Error al actualizar el producto');
	}
};

const deleteProduct = (req: Request, res: Response) => {
	try {
	} catch (e) {
		handleHttp(res, 'Error al eliminar el producto');
	}
};

const postProduct = ({ body }: Request, res: Response) => {
	try {
		res.send(body);
	} catch (e) {
		handleHttp(res, 'Error al enviar el producto');
	}
};

export { getProduct, getProducts, updateProduct, deleteProduct, postProduct };
