"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function EventsGraphPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>xacos events:graph</h1>
      <p>
        Generate a visual graph of event dependencies in your system. This helps you understand
        the flow of events and identify potential issues or optimization opportunities.
      </p>

      <h2>Usage</h2>
      <div className="relative">
        <pre>
          <code>xacos events:graph</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos events:graph", "graph")}
        >
          {copied === "graph" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Output Formats</h2>
      <p>The command can generate graphs in multiple formats:</p>
      <ul>
        <li><code>--format dot</code> - Graphviz DOT format</li>
        <li><code>--format mermaid</code> - Mermaid diagram format</li>
        <li><code>--format json</code> - JSON representation</li>
        <li><code>--output &lt;file&gt;</code> - Save to file</li>
      </ul>

      <h2>Examples</h2>

      <h3>Generate Mermaid Diagram</h3>
      <div className="relative">
        <pre>
          <code>xacos events:graph --format mermaid --output events.md</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos events:graph --format mermaid --output events.md", "mermaid")}
        >
          {copied === "mermaid" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>Generate Graphviz DOT</h3>
      <div className="relative">
        <pre>
          <code>xacos events:graph --format dot --output events.dot</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos events:graph --format dot --output events.dot", "dot")}
        >
          {copied === "dot" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Graph Visualization</h2>
      <p>
        The graph shows:
      </p>
      <ul>
        <li>Event emitters (where events are created)</li>
        <li>Event subscribers (who listens to events)</li>
        <li>Event flow (dependencies between events)</li>
        <li>Circular dependencies (if any)</li>
        <li>Orphaned events (events with no subscribers)</li>
      </ul>

      <h2>Example Graph Output</h2>
      <pre>
        <code>{`graph TD
    A[user.created] --> B[email.welcome]
    A --> C[analytics.signup]
    D[order.paid] --> E[notify.vendor]
    D --> F[update.inventory]
    F --> G[inventory.updated]
    G --> H[analytics.track]`}</code>
      </pre>

      <h2>Use Cases</h2>
      <ul>
        <li><strong>Architecture Review</strong> - Understand event flow in your system</li>
        <li><strong>Debugging</strong> - Identify missing subscribers or circular dependencies</li>
        <li><strong>Documentation</strong> - Generate visual documentation of your event system</li>
        <li><strong>Optimization</strong> - Find opportunities to optimize event handling</li>
      </ul>

      <h2>Related Commands</h2>
      <ul>
        <li><code>xacos events:list</code> - List all events</li>
      </ul>
    </div>
  );
}

