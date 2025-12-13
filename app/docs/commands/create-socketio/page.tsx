export default function CreateSocketIOPage() {
  return (
    <div className="prose">
      <h1>xacos create:socket.io</h1>
      <p>Add Socket.IO to your project for advanced real-time features with automatic reconnection and rooms support.</p>
      <h2>Usage</h2>
      <pre><code>xacos create:socket.io</code></pre>
      <h2>What Gets Created</h2>
      <ul>
        <li>Socket.IO server setup</li>
        <li>Event handlers</li>
        <li>Room management</li>
        <li>Namespace configuration</li>
        <li>Example real-time chat</li>
      </ul>
      <h2>Features</h2>
      <ul>
        <li>Automatic reconnection</li>
        <li>Broadcasting to rooms</li>
        <li>Namespace support</li>
        <li>Binary streaming</li>
        <li>Fallback to polling</li>
      </ul>
    </div>
  );
}
