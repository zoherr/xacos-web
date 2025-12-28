"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function InitCommandPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>xacos init</h1>
      <p>
        Initialize a new Express.js backend project with your choice of configuration
        and dependencies.
      </p>

      <h2>Usage</h2>
      <div className="relative">
        <pre>
          <code>xacos init &lt;project-name&gt; [options]</code>
        </pre>
      </div>

      <h2>Options</h2>
      <ul>
        <li><code>--ts</code> - Initialize with TypeScript</li>
        <li><code>--js</code> - Initialize with JavaScript (default)</li>
        <li><code>--prisma</code> - Add Prisma ORM</li>
        <li><code>--mongodb</code> - Add MongoDB setup</li>
        <li><code>--redis</code> - Add Redis caching</li>
        <li><code>--ws</code> - Include native WebSocket</li>
        <li><code>--socket.io</code> - Include Socket.io</li>
        <li><code>--docker</code> - Include Docker configuration</li>
        <li><code>--git-action</code> - Include GitHub Actions CI/CD</li>
      </ul>

      <h2>Examples</h2>

      <h3>Basic Project with TypeScript</h3>
      <div className="relative">
        <pre>
          <code>xacos init my-api --ts</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos init my-api --ts", "ts")}
        >
          {copied === "ts" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>Full Stack with TypeScript, Prisma, and Redis</h3>
      <div className="relative">
        <pre>
          <code>xacos init my-api --ts --prisma --redis</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos init my-api --ts --prisma --redis", "full")}
        >
          {copied === "full" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>MongoDB with Docker</h3>
      <div className="relative">
        <pre>
          <code>xacos init my-api --ts --mongodb --docker</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos init my-api --ts --mongodb --docker", "mongo")}
        >
          {copied === "mongo" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>What Gets Created</h2>
      <p>The init command creates a complete project structure including:</p>
      <ul>
        <li>Express application setup with middleware</li>
        <li>Professional folder structure</li>
        <li>Configuration files</li>
        <li>Environment variables template</li>
        <li>Package.json with scripts</li>
        <li>README with project documentation</li>
      </ul>

      <h2>Next Steps</h2>
      <p>After initializing your project:</p>
      <ol>
        <li>Navigate to your project directory</li>
        <li>Install dependencies with <code>npm install</code></li>
        <li>Configure environment variables in <code>.env</code></li>
        <li>Start development server with <code>npm run dev</code></li>
      </ol>
    </div>
  );
}
