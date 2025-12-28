"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function DeployPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>xacos deploy</h1>
      <p>
        Auto-generate and deploy infrastructure as code. Xacos OS automatically detects your
        project configuration and generates deployment configs for various platforms.
      </p>

      <h2>Usage</h2>
      <div className="relative">
        <pre>
          <code>xacos deploy [options]</code>
        </pre>
      </div>

      <h2>Options</h2>
      <ul>
        <li><code>--platform &lt;name&gt;</code> - Target platform (docker, k8s, railway, fly, render)</li>
        <li><code>--dry-run</code> - Generate configs without deploying</li>
        <li><code>--output &lt;dir&gt;</code> - Output directory for generated configs</li>
      </ul>

      <h2>Supported Platforms</h2>
      <ul>
        <li><code>docker</code> - Docker Compose</li>
        <li><code>k8s</code> - Kubernetes manifests</li>
        <li><code>railway</code> - Railway.app</li>
        <li><code>fly</code> - Fly.io</li>
        <li><code>render</code> - Render.com</li>
        <li><code>vercel</code> - Vercel (for serverless)</li>
        <li><code>aws</code> - AWS (ECS, Lambda, etc.)</li>
      </ul>

      <h2>Examples</h2>

      <h3>Deploy to Docker</h3>
      <div className="relative">
        <pre>
          <code>xacos deploy --platform docker</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos deploy --platform docker", "docker")}
        >
          {copied === "docker" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>Generate Kubernetes Manifests</h3>
      <div className="relative">
        <pre>
          <code>xacos deploy --platform k8s --dry-run</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos deploy --platform k8s --dry-run", "k8s")}
        >
          {copied === "k8s" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>Deploy to Railway</h3>
      <div className="relative">
        <pre>
          <code>xacos deploy --platform railway</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos deploy --platform railway", "railway")}
        >
          {copied === "railway" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Auto-Detection</h2>
      <p>
        Xacos OS automatically detects:
      </p>
      <ul>
        <li><strong>Docker</strong> - Existing Dockerfiles and docker-compose.yml</li>
        <li><strong>Databases</strong> - MongoDB, PostgreSQL, MySQL, Redis</li>
        <li><strong>Queues</strong> - BullMQ, RabbitMQ</li>
        <li><strong>Services</strong> - API, Worker, Realtime services</li>
        <li><strong>Dependencies</strong> - Required environment variables</li>
      </ul>

      <h2>Generated Files</h2>
      <p>Depending on the platform, Xacos generates:</p>

      <h3>Docker</h3>
      <ul>
        <li><code>docker-compose.yml</code> - Service definitions</li>
        <li><code>Dockerfile</code> - Application container</li>
        <li><code>.dockerignore</code> - Docker ignore rules</li>
      </ul>

      <h3>Kubernetes</h3>
      <ul>
        <li><code>k8s/deployment.yaml</code> - Deployment manifests</li>
        <li><code>k8s/service.yaml</code> - Service definitions</li>
        <li><code>k8s/configmap.yaml</code> - Configuration maps</li>
        <li><code>k8s/secret.yaml</code> - Secret templates</li>
      </ul>

      <h3>Railway / Fly.io / Render</h3>
      <ul>
        <li><code>railway.json</code> / <code>fly.toml</code> / <code>render.yaml</code></li>
        <li>Service configurations</li>
        <li>Environment variable templates</li>
      </ul>

      <h2>Deployment Workflow</h2>
      <ol>
        <li>Run <code>xacos deploy --platform &lt;name&gt;</code></li>
        <li>Xacos detects your project configuration</li>
        <li>Generates platform-specific configs</li>
        <li>Validates configuration</li>
        <li>Deploys (or shows dry-run preview)</li>
      </ol>

      <h2>Environment Variables</h2>
      <p>
        Xacos automatically generates environment variable templates based on your adapters,
        databases, and services. These are included in the deployment configs.
      </p>

      <h2>CI/CD Integration</h2>
      <p>
        Generated configs work seamlessly with:
      </p>
      <ul>
        <li>GitHub Actions</li>
        <li>GitLab CI</li>
        <li>CircleCI</li>
        <li>Jenkins</li>
      </ul>
    </div>
  );
}

