const redis = require ('redis');
const session =require ('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient =new redis.createClient({
    host:process.env.REDIS_URL,
    port:process.env.REDIS_PORT,
    pass:process.env.REDIS_PASS
}) 
module.exports= redisClient;