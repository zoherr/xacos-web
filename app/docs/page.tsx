"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>Installation</h1>
      <p>
        <strong>Xacos OS 2.0</strong> is a powerful CLI tool that helps you build production-ready
        Node.js backend projects with Express.js, following industry best practices.
      </p>

      <h2>Global Installation</h2>
      <p>Install Xacos globally to use it anywhere on your system:</p>
      <div className="relative">
        <pre>
          <code>npm install -g xacos</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("npm install -g xacos", "global")}
        >
          {copied === "global" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Using npx</h2>
      <p>
        You can also use npx to run Xacos without installing it globally:
      </p>
      <div className="relative">
        <pre>
          <code>npx xacos init my-project</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("npx xacos init my-project", "npx")}
        >
          {copied === "npx" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Verify Installation</h2>
      <p>After installation, verify that Xacos is correctly installed:</p>
      <div className="relative">
        <pre>
          <code>xacos --version</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos --version", "version")}
        >
          {copied === "version" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Requirements</h2>
      <ul>
        <li>Node.js 18.x or higher</li>
        <li>npm 9.x or higher (or yarn/pnpm)</li>
        <li>Git (for version control)</li>
      </ul>

      <h2>What Xacos Does</h2>
      <p>Xacos helps you:</p>
      <ul>
        <li>Scaffold professional backend projects</li>
        <li>Generate modules, controllers, services automatically</li>
        <li>Manage events and pipelines</li>
        <li>Deploy with infrastructure as code</li>
        <li>Monitor your applications</li>
      </ul>

      <h2>Next Steps</h2>
      <p>Now that you have Xacos installed, you can:</p>
      <ul>
        <li>Follow the Quick Start guide to create your first project</li>
        <li>Learn about the project structure</li>
        <li>Explore available commands</li>
      </ul>
    </div>
  );
}
