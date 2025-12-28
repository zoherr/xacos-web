"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function AddAdapterPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>xacos add:adapter</h1>
      <p>
        Add a vendor-agnostic adapter for databases, mailers, queues, storage, and more.
        Adapters allow you to switch providers at runtime without code changes.
      </p>

      <h2>Usage</h2>
      <div className="relative">
        <pre>
          <code>xacos add:adapter &lt;type&gt; &lt;name&gt;</code>
        </pre>
      </div>

      <h2>Adapter Types</h2>
      <ul>
        <li><code>db</code> - Database adapters (Prisma, Mongoose)</li>
        <li><code>mailer</code> - Email adapters (SMTP, Resend, SES)</li>
        <li><code>queue</code> - Queue adapters (BullMQ, RabbitMQ)</li>
        <li><code>storage</code> - Storage adapters (S3, Local)</li>
      </ul>

      <h2>Examples</h2>

      <h3>Add Mailer Adapter</h3>
      <div className="relative">
        <pre>
          <code>xacos add:adapter mailer resend</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos add:adapter mailer resend", "resend")}
        >
          {copied === "resend" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>Add Database Adapter</h3>
      <div className="relative">
        <pre>
          <code>xacos add:adapter db prisma</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos add:adapter db prisma", "prisma")}
        >
          {copied === "prisma" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>Add Queue Adapter</h3>
      <div className="relative">
        <pre>
          <code>xacos add:adapter queue bullmq</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos add:adapter queue bullmq", "bullmq")}
        >
          {copied === "bullmq" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Available Adapters</h2>

      <h3>Database</h3>
      <ul>
        <li><code>prisma</code> - Prisma ORM</li>
        <li><code>mongoose</code> - Mongoose ODM</li>
      </ul>

      <h3>Mailer</h3>
      <ul>
        <li><code>smtp</code> - SMTP server</li>
        <li><code>resend</code> - Resend API</li>
        <li><code>ses</code> - AWS SES</li>
      </ul>

      <h3>Queue</h3>
      <ul>
        <li><code>bullmq</code> - BullMQ</li>
        <li><code>rabbitmq</code> - RabbitMQ</li>
      </ul>

      <h3>Storage</h3>
      <ul>
        <li><code>s3</code> - AWS S3</li>
        <li><code>local</code> - Local filesystem</li>
      </ul>

      <h2>Switching Adapters</h2>
      <p>
        Switch between adapters at runtime without code changes:
      </p>
      <div className="relative">
        <pre>
          <code>xacos switch mailer smtp</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos switch mailer smtp", "switch")}
        >
          {copied === "switch" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Using Adapters in Code</h2>
      <p>Adapters provide a unified interface:</p>
      <pre>
        <code>{`import { mailer } from "@xacos/adapters";

// Works with any mailer adapter
await mailer.send({
  to: "user@example.com",
  template: "welcome",
  provider: "auto"  // Auto-selects best available
});`}</code>
      </pre>

      <h2>Adapter Registry</h2>
      <p>
        Adapters are registered in <code>xacos.json</code>:
      </p>
      <pre>
        <code>{`{
  "adapters": {
    "db": ["prisma", "mongoose"],
    "mailer": ["smtp", "resend", "ses"],
    "queue": ["bullmq", "rabbitmq"],
    "storage": ["s3", "local"]
  }
}`}</code>
      </pre>

      <h2>Benefits</h2>
      <ul>
        <li><strong>Zero Vendor Lock-in</strong> - Switch providers easily</li>
        <li><strong>Runtime Swappable</strong> - Change adapters without code changes</li>
        <li><strong>Typed Contracts</strong> - Type-safe adapter interfaces</li>
        <li><strong>Adapter Isolation</strong> - Adapters are isolated and testable</li>
      </ul>
    </div>
  );
}

