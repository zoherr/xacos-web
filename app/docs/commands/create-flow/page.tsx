"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CreateFlowPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>xacos create:flow</h1>
      <p>
        Create a typed, composable pipeline for event-driven workflows. Xacos Pipelines (XFlow)
        are code-first alternatives to visual workflow builders like n8n.
      </p>

      <h2>Usage</h2>
      <div className="relative">
        <pre>
          <code>xacos create:flow &lt;name&gt;</code>
        </pre>
      </div>

      <h2>Examples</h2>

      <h3>User Signup Pipeline</h3>
      <div className="relative">
        <pre>
          <code>xacos create:flow user.signup</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos create:flow user.signup", "signup")}
        >
          {copied === "signup" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>Order Processing Pipeline</h3>
      <div className="relative">
        <pre>
          <code>xacos create:flow order.process</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos create:flow order.process", "order")}
        >
          {copied === "order" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>What Gets Created</h2>
      <p>The command generates a fully typed pipeline file:</p>
      <ul>
        <li><code>src/flows/&lt;name&gt;.flow.ts</code> - Pipeline definition</li>
      </ul>

      <h2>Pipeline Structure</h2>
      <p>Example generated pipeline:</p>
      <pre>
        <code>{`import { flow } from "@xacos/flow";
import { z } from "zod";

const userSignupSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(8),
});

export default flow("user.signup")
  .input<{ email: string; name: string; password: string }>()
  .validate(userSignupSchema)
  .save("db.users")
  .emit("email.welcome")
  .emit("analytics.signup")
  .queue("sendEmail");`}</code>
      </pre>

      <h2>Pipeline Features</h2>
      <ul>
        <li><strong>Fully Typed</strong> - Input/output types are enforced at compile time</li>
        <li><strong>Deterministic Execution</strong> - Pipelines run predictably</li>
        <li><strong>Async-Safe</strong> - Handles async operations correctly</li>
        <li><strong>Retries & Failures</strong> - Built-in retry logic and error handling</li>
        <li><strong>Hooks</strong> - Lifecycle hooks for before/after execution</li>
      </ul>

      <h2>Triggering Pipelines</h2>
      <p>Pipelines can be triggered by:</p>
      <ul>
        <li><strong>HTTP</strong> - REST API endpoints</li>
        <li><strong>Queue</strong> - Message queue jobs</li>
        <li><strong>Event</strong> - Event emitters</li>
        <li><strong>Cron</strong> - Scheduled tasks</li>
      </ul>

      <h2>Running Pipelines</h2>
      <div className="relative">
        <pre>
          <code>xacos run flow user.signup --input data.json</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos run flow user.signup --input data.json", "run")}
        >
          {copied === "run" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>TypeScript Support</h2>
      <p>
        All pipelines are fully typed. When using TypeScript, you get:
      </p>
      <ul>
        <li>Type-safe input validation</li>
        <li>Typed output contracts</li>
        <li>IntelliSense support</li>
        <li>Compile-time error checking</li>
      </ul>
    </div>
  );
}

