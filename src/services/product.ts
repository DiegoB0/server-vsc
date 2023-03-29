import { Product } from '../interfaces/product.interface';
import ProductModel from '../models/Product';

const insertProduct = async (product: Product) => {
	const responseItem = await ProductModel.create(product);
	return responseItem;
};

const getProducts = async () => {
	const responseItems = await ProductModel.find({});
	return responseItems;
};

const getProduct = async (id: string) => {
	const responseItem = await ProductModel.findOne({ _id: id });
	return responseItem;
};

const updateProduct = async (id: string, data: Product) => {
	const responseItem = await ProductModel.findOneAndUpdate({ _id: id }, data, {
		new: true,
	});
	return responseItem;
};

const deleteProduct = async (id: string) => {
	const responseItem = await ProductModel.findOneAndRemove({ _id: id });
	return responseItem;
};

export { insertProduct, getProducts, getProduct, updateProduct, deleteProduct };
