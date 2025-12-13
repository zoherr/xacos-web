"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CreateRedisPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>xacos create:redis</h1>
      <p>
        Add Redis integration to your project for caching, session storage, and real-time features.
      </p>

      <h2>Usage</h2>
      <div className="relative">
        <pre>
          <code>xacos create:redis</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos create:redis", "basic")}
        >
          {copied === "basic" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>What Gets Created</h2>
      <ul>
        <li>Redis client configuration</li>
        <li>Connection management utilities</li>
        <li>Caching service with common operations</li>
        <li>Session store configuration</li>
        <li>Environment variables for Redis connection</li>
      </ul>

      <h2>Configuration</h2>
      <p>After running the command, update your .env file with Redis connection details:</p>
      <div className="relative">
        <pre>
          <code>{`REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0`}</code>
        </pre>
      </div>

      <h2>Usage in Your Code</h2>
      <div className="relative">
        <pre>
          <code>{`import { redisClient } from './config/redis';

// Set a value
await redisClient.set('key', 'value', 'EX', 3600);

// Get a value
const value = await redisClient.get('key');

// Delete a key
await redisClient.del('key');`}</code>
        </pre>
      </div>

      <h2>Common Use Cases</h2>
      <ul>
        <li>API response caching</li>
        <li>Session management</li>
        <li>Rate limiting</li>
        <li>Real-time data updates</li>
        <li>Job queue management</li>
      </ul>
    </div>
  );
}
