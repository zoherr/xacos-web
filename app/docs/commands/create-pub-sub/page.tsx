export default function CreatePubSubPage() {
  return (
    <div className="prose">
      <h1>xacos create:pub-sub</h1>
      <p>Add Redis-based pub/sub messaging system for event-driven architecture.</p>
      <h2>Usage</h2>
      <pre><code>xacos create:pub-sub</code></pre>
      <h2>What Gets Created</h2>
      <ul>
        <li>Redis pub/sub client configuration</li>
        <li>Publisher and subscriber utilities</li>
        <li>Event emitter system</li>
        <li>Channel management</li>
      </ul>
      <h2>Example Usage</h2>
      <pre><code>{`import { publisher, subscriber } from './config/pubsub';

// Subscribe to a channel
subscriber.subscribe('notifications');
subscriber.on('message', (channel, message) => {
  console.log(\`Received: \${message}\`);
});

// Publish to a channel
publisher.publish('notifications', 'Hello World');`}</code></pre>
    </div>
  );
}
