import { Auth } from './auth.interface';
import { Role } from './role.interface';

export interface User extends Auth, Role {
	name: string;
	description: string;
}
