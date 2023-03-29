import { model, Model, Schema, Types } from 'mongoose';
import { Product } from '../interfaces/product.interface';

const ProductSchema = new Schema<Product>(
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

const ProductModel = model('product', ProductSchema);
export default ProductModel;
