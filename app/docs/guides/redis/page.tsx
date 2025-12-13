export default function RedisGuidePage() {
  return (
    <div className="prose">
      <h1>Redis Guide</h1>
      <p>
        Redis is an in-memory data store perfect for caching, session management, and real-time features.
      </p>

      <h2>Add Redis to Your Project</h2>
      <pre><code>xacos create:redis</code></pre>

      <h2>Configuration</h2>
      <p>Configure Redis connection in <code>.env</code>:</p>
      <pre><code>{`REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0`}</code></pre>

      <h2>Basic Operations</h2>
      <pre><code>{`import { redisClient } from './config/redis';

// String operations
await redisClient.set('key', 'value');
const value = await redisClient.get('key');

// Set with expiration (in seconds)
await redisClient.setex('key', 3600, 'value');

// Hash operations
await redisClient.hset('user:1', 'name', 'John');
const name = await redisClient.hget('user:1', 'name');

// List operations
await redisClient.lpush('queue', 'task1');
const task = await redisClient.rpop('queue');`}</code></pre>

      <h2>Caching Pattern</h2>
      <pre><code>{`async function getCachedUser(id: string) {
  const cached = await redisClient.get(\`user:\${id}\`);

  if (cached) {
    return JSON.parse(cached);
  }

  const user = await database.findUser(id);
  await redisClient.setex(
    \`user:\${id}\`,
    3600,
    JSON.stringify(user)
  );

  return user;
}`}</code></pre>

      <h2>Common Use Cases</h2>
      <ul>
        <li>API response caching</li>
        <li>Session storage</li>
        <li>Rate limiting</li>
        <li>Leaderboards</li>
        <li>Pub/Sub messaging</li>
        <li>Job queues</li>
      </ul>
    </div>
  );
}
