import { Router } from 'express';
import { getItems } from '../controllers/sales.controller';
import { isAdmin } from '../middlewares/authRolesMiddleware';
import { checkJwt } from '../middlewares/sessioMiddlewaren';

const router = Router();

router.get('/', [checkJwt, isAdmin], getItems);

export { router };
