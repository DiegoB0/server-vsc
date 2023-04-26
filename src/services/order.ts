import { Order } from '../interfaces/order.interface';
import OrderModel from '../models/Order';
import SalesModel from '../models/Sales';
import { calculateOrder } from '../utils/caltulatePrice.handle';
import { emitOrder } from '../utils/sockets.handle';

const insertOrder = async (order: Order) => {
	//Asignar el numero de la orden
	const lastOrder = await OrderModel.find().sort({ orderNumber: -1 }).limit(1);

	//Validar si devuelve alguna orden
	if (lastOrder.length > 0) {
		//Si la devuelde autoincrementa el valor de el No. de orden
		const orderCount = lastOrder;
		const newOrder = orderCount[0].orderNumber + 1;
		order.orderNumber = newOrder;
	} else {
		order.orderNumber = 1;
	}

	//Calcular Orden
	const totalPrice = calculateOrder(order);
	totalPrice.then(async (price) => {
		order.price = price;

		//Insertar en la BD
		const responseItem = await OrderModel.create(order);

		//Lista actualizada para el front
		const orderAfterPost = await OrderModel.find({});
		emitOrder(orderAfterPost);
		return responseItem;
	});
};

const getOrders = async () => {
	const responseItems = await OrderModel.find({});
	return responseItems;
};

const getOrder = async (id: string) => {
	const responseItem = await OrderModel.findOne({ _id: id });
	return responseItem;
};

const updateOrder = async (id: string, data: Order) => {
	const responseItem = await OrderModel.findOneAndUpdate(
		{ orderNumber: id },
		data,
		{
			new: true,
		}
	);

	//Lista actualizada para el front
	const orderAfterUpdate = await OrderModel.find({});
	emitOrder(orderAfterUpdate);
	return responseItem;
};

const deleteOrder = async (id: string) => {
	const responseItem = await OrderModel.findOneAndRemove({ orderNumber: id });

	//Lista actualizada para el front
	const orderAfterDelete = await OrderModel.find({});
	emitOrder(orderAfterDelete);
	return responseItem;
};

const completeOrder = async (id: string) => {
	//Guardar la orden antes de eliminar
	const order = await OrderModel.findOne({ orderNumber: id });
	// const salesUpdated = await SalesModel.create(order);
	// console.log(salesUpdated);
	const responseItem = await OrderModel.findOneAndRemove({ orderNumber: id });

	//Lista actualizada para el front
	const orderAfterDelete = await OrderModel.find({});
	emitOrder(orderAfterDelete);
	return responseItem;
};

export {
	insertOrder,
	getOrders,
	getOrder,
	updateOrder,
	deleteOrder,
	completeOrder,
};
