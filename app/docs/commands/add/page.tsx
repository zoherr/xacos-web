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
        model, and routes. Enhanced with smart code generation and event support.
      </p>

      <h2>Usage</h2>
      <pre>
        <code>xacos add &lt;name&gt; [options]</code>
      </pre>

      <h2>Options</h2>
      <ul>
        <li><code>--fields</code> - Define model fields (format: <code>name:type,name2:type</code>)</li>
        <li><code>--crud</code> - Generate full CRUD operations</li>
        <li><code>--events</code> - Generate event emitters/subscribers</li>
      </ul>

      <h2>Examples</h2>

      <h3>Basic Module</h3>
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

      <h3>Advanced Module with Fields and Events</h3>
      <div className="relative">
        <pre>
          <code>
            xacos add Invoice --fields "amount:number,status:string,paidAt:date" --crud --events
          </code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() =>
            copyToClipboard(
              "xacos add Invoice --fields \"amount:number,status:string,paidAt:date\" --crud --events",
              "invoice"
            )
          }
        >
          {copied === "invoice" ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      <h3>Multiple Modules</h3>
      <div className="relative">
        <pre>
          <code>
            xacos add notifications{"\n"}
            xacos add products --crud --events
          </code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() =>
            copyToClipboard(
              "xacos add notifications\nxacos add products --crud --events",
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
        <li><code>src/controllers/&lt;name&gt;.controller.js</code> - Request handlers</li>
        <li><code>src/services/&lt;name&gt;.service.js</code> - Business logic</li>
        <li><code>src/models/&lt;name&gt;.model.js</code> - Database models</li>
        <li><code>src/routes/&lt;name&gt;.routes.js</code> - API routes</li>
        <li><code>src/events/&lt;name&gt;.created.ts</code> - Event emitters (if <code>--events</code>)</li>
        <li><code>src/events/&lt;name&gt;.updated.ts</code> - Event emitters (if <code>--events</code>)</li>
        <li><code>src/events/&lt;name&gt;.deleted.ts</code> - Event emitters (if <code>--events</code>)</li>
      </ul>

      <p>
        The route is <strong>automatically registered</strong> in
        <code> src/routes/index.js</code>.
      </p>

      <h2>Field Types</h2>
      <p>Supported field types for the <code>--fields</code> option:</p>
      <ul>
        <li><code>string</code> - Text field</li>
        <li><code>number</code> - Numeric field</li>
        <li><code>boolean</code> - Boolean field</li>
        <li><code>date</code> - Date/DateTime field</li>
        <li><code>email</code> - Email field (with validation)</li>
        <li><code>url</code> - URL field (with validation)</li>
      </ul>

      <h2>TypeScript Support</h2>
      <p>
        When using TypeScript (<code>--ts</code>), all generated code includes:
      </p>
      <ul>
        <li>Full type definitions</li>
        <li>Typed request/response handlers</li>
        <li>Typed event payloads</li>
        <li>Type-safe database operations</li>
      </ul>
    </div>
  );
}
