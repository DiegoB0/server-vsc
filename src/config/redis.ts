import 'ditenv/config';
import redis from 'redis';

const url = process.env.REDIS || 'redis://localhost:6379';

const cache = redis.createClient({
	url,
});

export default cache;
