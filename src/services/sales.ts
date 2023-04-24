import { Order } from '../interfaces/order.interface';
import OrderModel from '../models/Order';

const getSales = async () => {
	const responseItems = await OrderModel.find({});
	return responseItems;
};

const getSale = async (id: string) => {
	const responseItem = await OrderModel.findOne({ _id: id });
	return responseItem;
};

export { getSale, getSales };
