import { model, Model, Schema, Types } from 'mongoose';
import { Menu } from '../interfaces/menu.interface';

const MenuSchema = new Schema<Menu>(
	{
		name: {
			type: String,
			required: true,
		},

		price: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

const MenuModel = model('menu', MenuSchema);
export default MenuModel;
