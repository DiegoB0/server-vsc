import { NextFunction, Request, Response } from 'express';
import cache from '../config/redis';

export function cacheMiddleware(
	req: Request,
	res: Response,
	next: NextFunction
) {}
