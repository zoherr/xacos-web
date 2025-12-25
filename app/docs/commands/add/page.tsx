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
        Create a <strong>new backend module</strong> with controller, service,
        model, and routes.
      </p>

      <h2>Usage</h2>
      <pre>
        <code>xacos add &lt;name&gt;</code>
      </pre>

      <h2>Examples</h2>

      <div className="relative">
        <pre>
          <code>xacos add Users</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos add Users", "users")}
        >
          {copied === "users" ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="relative">
        <pre>
          <code>
            xacos add notifications{"\n"}
            xacos add products
          </code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() =>
            copyToClipboard(
              "xacos add notifications\nxacos add products",
              "multi"
            )
          }
        >
          {copied === "multi" ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      <h2>What It Generates</h2>
      <ul>
        <li><code>src/controllers/&lt;name&gt;.controller.js</code></li>
        <li><code>src/services/&lt;name&gt;.service.js</code></li>
        <li><code>src/models/&lt;name&gt;.model.js</code></li>
        <li><code>src/routes/&lt;name&gt;.routes.js</code></li>
      </ul>

      <p>
        The route is <strong>automatically registered</strong> in
        <code> src/routes/index.js</code>.
      </p>
    </div>
  );
}
