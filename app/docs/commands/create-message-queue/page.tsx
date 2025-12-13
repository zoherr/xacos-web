export default function CreateMessageQueuePage() {
  return (
    <div className="prose">
      <h1>xacos create:message-queue</h1>
      <p>Add BullMQ message queue system for background job processing and task scheduling.</p>
      <h2>Usage</h2>
      <pre><code>xacos create:message-queue</code></pre>
      <h2>What Gets Created</h2>
      <ul>
        <li>BullMQ queue configuration</li>
        <li>Job processors</li>
        <li>Queue management utilities</li>
        <li>Example email job implementation</li>
      </ul>
      <h2>Common Use Cases</h2>
      <ul>
        <li>Email sending</li>
        <li>Image processing</li>
        <li>PDF generation</li>
        <li>Data synchronization</li>
        <li>Scheduled tasks</li>
      </ul>
    </div>
  );
}
