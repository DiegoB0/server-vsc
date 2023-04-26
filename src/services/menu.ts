import { Menu } from '../interfaces/menu.interface';
import MenuModel from '../models/Menu';

const insertMenu = async (menu: Menu) => {
	//Insertar en la BD
	const responseItem = await MenuModel.create(menu);

	return responseItem;
};

const getMenus = async () => {
	const responseItems = await MenuModel.find({});
	return responseItems;
};

const getMenu = async (id: string) => {
	const responseItem = await MenuModel.findOne({ _id: id });
	return responseItem;
};

const updateMenu = async (id: string, data: Menu) => {
	const responseItem = await MenuModel.findOneAndUpdate({ _id: id }, data, {
		new: true,
	});
	return responseItem;
};

const deleteMenu = async (id: string) => {
	const responseItem = await MenuModel.findOneAndRemove({ _id: id });
	return responseItem;
};

export { insertMenu, getMenus, getMenu, updateMenu, deleteMenu };
