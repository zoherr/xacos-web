"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function AddCommandPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>xacos add</h1>
      <p>
        Add new features, middleware, or integrations to an existing Xacos project.
      </p>

      <h2>Usage</h2>
      <div className="relative">
        <pre>
          <code>xacos add &lt;feature&gt;</code>
        </pre>
      </div>

      <h2>Available Features</h2>
      <ul>
        <li><code>auth</code> - Add authentication middleware (JWT, sessions)</li>
        <li><code>cors</code> - Add CORS middleware</li>
        <li><code>helmet</code> - Add Helmet security headers</li>
        <li><code>morgan</code> - Add Morgan HTTP request logger</li>
        <li><code>rate-limit</code> - Add rate limiting middleware</li>
        <li><code>compression</code> - Add response compression</li>
      </ul>

      <h2>Examples</h2>

      <h3>Add Authentication</h3>
      <div className="relative">
        <pre>
          <code>xacos add auth</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos add auth", "auth")}
        >
          {copied === "auth" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>Add CORS and Helmet</h3>
      <div className="relative">
        <pre>
          <code>xacos add cors{'\n'}xacos add helmet</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos add cors\nxacos add helmet", "cors")}
        >
          {copied === "cors" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>What Happens</h2>
      <p>When you add a feature, Xacos will:</p>
      <ul>
        <li>Install required npm packages</li>
        <li>Generate configuration files</li>
        <li>Add middleware to your Express app</li>
        <li>Update your .env.example with new variables</li>
        <li>Create example usage documentation</li>
      </ul>
    </div>
  );
}
