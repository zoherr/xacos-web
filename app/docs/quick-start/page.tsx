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
        Get started with Xacos OS 2.0 in just a few minutes. This guide will walk you through
        creating your first Express.js backend project or monorepo.
      </p>

      <h2>Single Project</h2>

      <h3>1. Create a New Project</h3>
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

      <h3>2. Available Options</h3>
      <p>The init command supports several options to customize your project:</p>
      <ul>
        <li><code>--ts</code> - Initialize with TypeScript</li>
        <li><code>--prisma</code> - Add Prisma ORM</li>
        <li><code>--mongodb</code> - Add MongoDB setup</li>
        <li><code>--redis</code> - Add Redis caching</li>
        <li><code>--ws</code> - Include native WebSocket</li>
        <li><code>--socket.io</code> - Include Socket.io</li>
        <li><code>--docker</code> - Include Docker configuration</li>
        <li><code>--git-action</code> - Include GitHub Actions CI/CD</li>
      </ul>

      <h3>3. Navigate to Your Project</h3>
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

      <h3>4. Install Dependencies</h3>
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

      <h3>5. Add a Module</h3>
      <div className="relative">
        <pre>
          <code>xacos add Users --crud --events</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos add Users --crud --events", "add")}
        >
          {copied === "add" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>6. Start Development Server</h3>
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

      <h2>Monorepo</h2>

      <h3>1. Create a Monorepo</h3>
      <div className="relative">
        <pre>
          <code>npx xacos init my-org --monorepo --ts</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("npx xacos init my-org --monorepo --ts", "monorepo")}
        >
          {copied === "monorepo" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>2. Add Services</h3>
      <div className="relative">
        <pre>
          <code>
            cd my-org{"\n"}
            xacos add:service api --framework express --prisma{"\n"}
            xacos add:service worker --type queue
          </code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() =>
            copyToClipboard(
              "cd my-org\nxacos add:service api --framework express --prisma\nxacos add:service worker --type queue",
              "services"
            )
          }
        >
          {copied === "services" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>3. Install Dependencies</h3>
      <div className="relative">
        <pre>
          <code>npm install</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("npm install", "install-monorepo")}
        >
          {copied === "install-monorepo" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>4. Start All Services</h3>
      <div className="relative">
        <pre>
          <code>npm run dev</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("npm run dev", "dev-monorepo")}
        >
          {copied === "dev-monorepo" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>What's Next?</h2>
      <p>Now that your project is up and running, you can:</p>
      <ul>
        <li>Explore the project structure to understand the codebase</li>
        <li>Add new modules with <code>xacos add</code></li>
        <li>Create pipelines with <code>xacos create:flow</code></li>
        <li>Add adapters with <code>xacos add:adapter</code></li>
        <li>Configure your database connection</li>
        <li>Set up Redis caching</li>
        <li>Add WebSocket support</li>
        <li>Deploy with <code>xacos deploy</code></li>
      </ul>
    </div>
  );
}
