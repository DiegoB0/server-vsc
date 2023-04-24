import { Request, Response } from 'express';
import { RequestExt } from '../interfaces/request.interface';
import { getSale, getSales } from '../services/sales';
import { handleHttp } from '../utils/error.handle';

const getItem = async ({ params }: Request, res: Response) => {
	try {
		const { id } = params;
		const responseOrder = await getSale(id);
		const data = responseOrder ? responseOrder : 'NOT_FOUND';
		res.send(data);
	} catch (e) {
		handleHttp(res, 'Error al obtener la orden', e);
	}
};

const getItems = async (req: RequestExt, res: Response) => {
	try {
		res.send({
			data: 'SOLO SE VE CON JWT VALIDO',
			user: req.user,
		});
	} catch (e) {
		handleHttp(res, 'Error al obtener las ordenes', e);
	}
};

export { getItem, getItems };
