import { Auth } from '../interfaces/auth.interface';
import { User } from '../interfaces/user.interface';
import RoleModel from '../models/Role';
import UserModel from '../models/User';
import { encrypt, verified } from '../utils/bcrypt.handle';
import { generateToken } from '../utils/jwt.handle';

const registerNewUser = async ({ email, password, name, role }: User) => {
	//Comprobar si el usuario existe
	const checksIn = await UserModel.findOne({ email });
	if (checksIn) return 'USER_ALREADY_EXISTS';

	//Encriptar contraseña para guardarla en la bd
	const passHash = await encrypt(password);
	//Objeto a guardar en la BD
	const data = {
		email,
		password: passHash,
		name,
		role,
	};

	//Rol por defecto
	const defaultRole = await RoleModel.findOne({ role: 'moderator' });
	//Si el rol de moderador no existe es culpa del servidor
	if (defaultRole == null) return 'ROLE_NOT_FOUND_SERVER_ERROR';

	//Validar si nos mandaron algun rol
	if (role != null) {
		//Buscar el rol en la BD
		const foundRoles = await RoleModel.findOne({ role: { $in: role } });

		//Validar que el rol que nos mandaron existe en la BD
		if (foundRoles == null) {
			data.role = [defaultRole._id];
		} else {
			data.role = [foundRoles._id];
		}
	} else {
		data.role = [defaultRole._id];
	}

	//Insertar en la BD
	const registerNewUser = await UserModel.create(data);
	return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
	const checksIs = await UserModel.findOne({ email }).populate('role');

	if (!checksIs) return 'USER_NOT_FOUND';

	const passwordHash = checksIs.password;
	const isCorrect = await verified(password, passwordHash);

	if (!isCorrect) return 'PASSWORD_INCORRECT';

	const token = generateToken(checksIs.email);

	return token;
};

export { registerNewUser, loginUser };
