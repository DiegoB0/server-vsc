import { Router } from 'express';
import {
	completeItem,
	deleteItem,
	getItem,
	getItems,
	postItem,
	updateItem,
} from '../controllers/order.controller';

const router = Router();

router.get('/', getItems);

router.get('/:id', getItem);

router.post('/', postItem);

router.put('/:id', updateItem);

router.delete('/:id', deleteItem);

router.delete('/complete/:id', completeItem);

export { router };
