import { User } from '../interfaces/user.interface';
import UserModel from '../models/User';

const insertUser = async (user: User) => {
	const responseItem = await UserModel.create(user);
	return responseItem;
};

const getUsers = async () => {
	const responseItems = await UserModel.find({});
	return responseItems;
};

const getUser = async (id: string) => {
	const responseItem = await UserModel.findOne({ _id: id });
	return responseItem;
};

const updateUser = async (id: string, data: User) => {
	const responseItem = await UserModel.findOneAndUpdate({ _id: id }, data, {
		new: true,
	});
	return responseItem;
};

const deleteUser = async (id: string) => {
	const responseItem = await UserModel.findOneAndRemove({ _id: id });
	return responseItem;
};

export { insertUser, getUsers, getUser, updateUser, deleteUser };
