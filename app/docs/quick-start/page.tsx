"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function QuickStartPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>Quick Start</h1>
      <p>
        Get started with Xacos CLI in just a few minutes. This guide will walk you through
        creating your first Express.js backend project.
      </p>

      <h2>Create a New Project</h2>
      <p>Create a new project with TypeScript and Prisma support:</p>
      <div className="relative">
        <pre>
          <code>npx xacos init my-api --ts --prisma</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("npx xacos init my-api --ts --prisma", "init")}
        >
          {copied === "init" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Available Options</h2>
      <p>The init command supports several options to customize your project:</p>
      <ul>
        <li><code>--ts</code> - Initialize with TypeScript</li>
        <li><code>--prisma</code> - Add Prisma ORM</li>
        <li><code>--mongodb</code> - Add MongoDB setup</li>
        <li><code>--redis</code> - Add Redis caching</li>
      </ul>

      <h2>Navigate to Your Project</h2>
      <div className="relative">
        <pre>
          <code>cd my-api</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("cd my-api", "cd")}
        >
          {copied === "cd" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Install Dependencies</h2>
      <div className="relative">
        <pre>
          <code>npm install</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("npm install", "install")}
        >
          {copied === "install" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Start Development Server</h2>
      <div className="relative">
        <pre>
          <code>npm run dev</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("npm run dev", "dev")}
        >
          {copied === "dev" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <p>Your API server is now running at <code>http://localhost:3000</code></p>

      <h2>What's Next?</h2>
      <p>Now that your project is up and running, you can:</p>
      <ul>
        <li>Explore the project structure to understand the codebase</li>
        <li>Add new routes and controllers</li>
        <li>Configure your database connection</li>
        <li>Add middleware and services</li>
        <li>Set up Redis caching</li>
        <li>Add WebSocket support</li>
      </ul>
    </div>
  );
}
