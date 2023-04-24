import { model, Schema } from 'mongoose';

const roleSchema = new Schema(
	{
		role: {
			type: String,
		},
	},
	{
		versionKey: false,
	}
);

const RoleModel = model('role', roleSchema);
export default RoleModel;
