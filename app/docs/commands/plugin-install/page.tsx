"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function PluginInstallPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>xacos plugin install</h1>
      <p>
        Install a Xacos plugin to extend functionality. Plugins provide typed contracts,
        dependency isolation, and lifecycle hooks.
      </p>

      <h2>Usage</h2>
      <div className="relative">
        <pre>
          <code>xacos plugin install &lt;name&gt;</code>
        </pre>
      </div>

      <h2>Examples</h2>

      <h3>Install JWT Auth Plugin</h3>
      <div className="relative">
        <pre>
          <code>xacos plugin install auth-jwt</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos plugin install auth-jwt", "jwt")}
        >
          {copied === "jwt" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>Install Stripe Plugin</h3>
      <div className="relative">
        <pre>
          <code>xacos plugin install stripe</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos plugin install stripe", "stripe")}
        >
          {copied === "stripe" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Available Plugins</h2>
      <p>Popular Xacos plugins include:</p>
      <ul>
        <li><code>auth-jwt</code> - JWT authentication</li>
        <li><code>auth-oauth</code> - OAuth providers</li>
        <li><code>stripe</code> - Stripe payments</li>
        <li><code>paypal</code> - PayPal integration</li>
        <li><code>upload-s3</code> - S3 file uploads</li>
        <li><code>rate-limit</code> - Rate limiting</li>
        <li><code>cors</code> - CORS configuration</li>
        <li><code>helmet</code> - Security headers</li>
      </ul>

      <h2>Plugin Features</h2>
      <ul>
        <li><strong>Typed Contracts</strong> - Type-safe plugin interfaces</li>
        <li><strong>Dependency Isolation</strong> - Plugins don't conflict with each other</li>
        <li><strong>Lifecycle Hooks</strong> - onInit, onStart, onStop hooks</li>
        <li><strong>Configuration</strong> - Environment-based configuration</li>
      </ul>

      <h2>Plugin Configuration</h2>
      <p>
        Plugins are configured in <code>xacos.json</code>:
      </p>
      <pre>
        <code>{`{
  "plugins": {
    "auth-jwt": {
      "secret": "${process.env.JWT_SECRET}",
      "expiresIn": "7d"
    },
    "stripe": {
      "apiKey": "${process.env.STRIPE_API_KEY}"
    }
  }
}`}</code>
      </pre>

      <h2>Using Plugins</h2>
      <p>Plugins are automatically loaded and available in your code:</p>
      <pre>
        <code>{`import { auth } from "@xacos/plugins/auth-jwt";

// Use the plugin
const token = await auth.sign({ userId: "123" });
const payload = await auth.verify(token);`}</code>
      </pre>

      <h2>Creating Plugins</h2>
      <p>
        Create your own plugin with:
      </p>
      <div className="relative">
        <pre>
          <code>xacos plugin create my-plugin</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos plugin create my-plugin", "create")}
        >
          {copied === "create" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Related Commands</h2>
      <ul>
        <li><code>xacos plugin create</code> - Create a new plugin</li>
        <li><code>xacos plugin list</code> - List installed plugins</li>
        <li><code>xacos plugin uninstall</code> - Remove a plugin</code></li>
      </ul>
    </div>
  );
}

