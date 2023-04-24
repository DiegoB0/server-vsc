import { NextFunction, Request, Response } from 'express';
import RoleModel from '../models/Role';
import UserModel from '../models/User';

const isAdmin = async (req: any, res: Response, next: NextFunction) => {
	const email = req.user.id;

	//Buscar el usuario con el email del request
	const user = await UserModel.findOne({ email });
	if (user == null) return 'INVALID_USER';

	//Buscar el rol del usuario
	const role = await RoleModel.findOne({ _id: { $in: user.role } });

	//Validar si existe el rol en la BD
	if (role == null) return 'INVALID_ROLE';
	//Validar si es administrador
	if (role.role == 'admin') {
		next();
		return;
	}
	res.status(400).send('NOT_ENOUGH_PRIVILAGES');
};
export { isAdmin };
