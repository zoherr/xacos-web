"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function MonitorPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>xacos monitor</h1>
      <p>
        Display real-time observability dashboard showing requests, jobs, events, errors, and latency.
        Built-in observability powered by OpenTelemetry, Prometheus, and Loki.
      </p>

      <h2>Usage</h2>
      <div className="relative">
        <pre>
          <code>xacos monitor</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos monitor", "monitor")}
        >
          {copied === "monitor" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Options</h2>
      <ul>
        <li><code>--port &lt;port&gt;</code> - Port for the dashboard (default: 3001)</li>
        <li><code>--host &lt;host&gt;</code> - Host for the dashboard (default: localhost)</li>
        <li><code>--format json</code> - Output as JSON instead of dashboard</li>
      </ul>

      <h2>Dashboard Features</h2>
      <p>The monitor dashboard shows:</p>
      <ul>
        <li><strong>Requests</strong> - HTTP request metrics (count, latency, status codes)</li>
        <li><strong>Jobs</strong> - Queue job metrics (pending, processing, completed, failed)</li>
        <li><strong>Events</strong> - Event emission and subscription metrics</li>
        <li><strong>Errors</strong> - Error tracking and stack traces</li>
        <li><strong>Latency</strong> - P50, P95, P99 latency percentiles</li>
        <li><strong>Throughput</strong> - Requests per second</li>
        <li><strong>Resource Usage</strong> - CPU, memory, disk usage</li>
      </ul>

      <h2>Observability Stack</h2>
      <p>Xacos OS uses industry-standard observability tools:</p>
      <ul>
        <li><strong>OpenTelemetry</strong> - Distributed tracing and metrics</li>
        <li><strong>Prometheus</strong> - Metrics collection and storage</li>
        <li><strong>Loki</strong> - Log aggregation</li>
        <li><strong>Grafana</strong> - Visualization (optional)</li>
      </ul>

      <h2>Example Output</h2>
      <pre>
        <code>{`Xacos Monitor Dashboard
====================

Requests (last 1m):
  Total: 1,234
  Success: 1,200 (97.2%)
  Errors: 34 (2.8%)
  Avg Latency: 45ms
  P95 Latency: 120ms
  P99 Latency: 250ms

Jobs:
  Pending: 12
  Processing: 5
  Completed: 1,456
  Failed: 8

Events:
  Emitted: 234
  Processed: 230
  Pending: 4

Errors (last 1h):
  Total: 34
  Critical: 2
  Warnings: 32`}</code>
      </pre>

      <h2>Accessing the Dashboard</h2>
      <p>
        After running <code>xacos monitor</code>, open your browser to:
      </p>
      <div className="relative">
        <pre>
          <code>http://localhost:3001</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("http://localhost:3001", "url")}
        >
          {copied === "url" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Exporting Metrics</h2>
      <p>Export metrics in various formats:</p>
      <div className="relative">
        <pre>
          <code>xacos monitor --format json > metrics.json</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos monitor --format json > metrics.json", "export")}
        >
          {copied === "export" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Integration with External Tools</h2>
      <p>
        Xacos monitor can integrate with:
      </p>
      <ul>
        <li><strong>Grafana</strong> - For advanced visualizations</li>
        <li><strong>Datadog</strong> - For APM and monitoring</li>
        <li><strong>New Relic</strong> - For application monitoring</li>
        <li><strong>Sentry</strong> - For error tracking</li>
      </ul>
    </div>
  );
}

