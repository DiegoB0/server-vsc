import Role from '../models/Role';

export const createRoles = async () => {
	try {
		const count = await Role.estimatedDocumentCount();

		if (count > 0) return;

		const values = await Promise.all([
			new Role({ role: 'moderator' }).save(),
			new Role({ role: 'admin' }).save(),
		]);

		console.log(values);
	} catch (err) {
		console.error(err);
	}
};
