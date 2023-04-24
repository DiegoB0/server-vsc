import { model, Model, Schema, Types } from 'mongoose';
import { Order } from '../interfaces/order.interface';

const OrderSchema = new Schema<Order>(
	{
		name: {
			type: String,
			required: true,
		},
		orderNumber: {
			type: Number,
			required: true,
		},
		meals: {
			type: [Object],
			required: true,
		},
		paymentType: {
			type: String,
			enum: ['tarjeta', 'efectivo', 'transferencia'],
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		details: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const OrderModel = model('order', OrderSchema);
export default OrderModel;
