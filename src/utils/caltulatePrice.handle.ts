import { Order } from '../interfaces/order.interface';
import MenuModel from '../models/Menu';

const calculateOrder = async (order: Order) => {
	//Calcular el precio de las ordenes
	//Obtener los nombres y la cantidad de productos
	const mealNames = order.meals.map((meal) => meal.name);
	const mealQuantity = order.meals.map((meal) => meal.quantity);

	let totalMealOne = 0;
	let totalMealTwo = 0;
	let totalMealThree = 0;
	let totalMealFour = 0;
	let totalMealFive = 0;
	let totalPrice = 0;

	if (mealNames[0]) {
		const meal = mealNames[0];
		const menuItems = await MenuModel.find({ name: meal });
		totalMealOne = menuItems[0].price * mealQuantity[0];
		totalPrice = totalMealOne;
	}

	if (mealNames[1]) {
		const meal = mealNames[1];
		const menuItems = await MenuModel.find({ name: meal });
		totalMealTwo = menuItems[0].price * mealQuantity[1];
		totalPrice = totalMealTwo + totalMealOne;
	}

	if (mealNames[2]) {
		const meal = mealNames[2];
		const menuItems = await MenuModel.find({ name: meal });
		totalMealThree = menuItems[0].price * mealQuantity[2];
		totalPrice = totalMealTwo + totalMealOne + totalMealThree;
	}

	if (mealNames[3]) {
		const meal = mealNames[3];
		const menuItems = await MenuModel.find({ name: meal });
		totalMealFour = menuItems[0].price * mealQuantity[3];
		totalPrice = totalMealTwo + totalMealOne + totalMealThree + totalMealFour;
	}

	if (mealNames[4]) {
		const meal = mealNames[4];
		const menuItems = await MenuModel.find({ name: meal });
		totalMealFive = menuItems[0].price * mealQuantity[4];
		totalPrice =
			totalMealOne +
			totalMealTwo +
			totalMealThree +
			totalMealFour +
			totalMealFive;
	}

	return totalPrice;
};

export { calculateOrder };
