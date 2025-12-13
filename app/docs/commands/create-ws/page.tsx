export default function CreateWSPage() {
  return (
    <div className="prose">
      <h1>xacos create:ws</h1>
      <p>Add WebSocket support to your Express.js application for real-time bidirectional communication.</p>
      <h2>Usage</h2>
      <pre><code>xacos create:ws</code></pre>
      <h2>What Gets Created</h2>
      <ul>
        <li>WebSocket server configuration</li>
        <li>Connection handler</li>
        <li>Event management system</li>
        <li>Example chat implementation</li>
      </ul>
      <h2>Example Implementation</h2>
      <pre><code>{`import { wss } from './config/websocket';

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received:', message);
    ws.send('Hello from server');
  });
});`}</code></pre>
    </div>
  );
}
