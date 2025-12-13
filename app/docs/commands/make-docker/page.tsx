"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function MakeDockerPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>xacos make:docker</h1>
      <p>
        Generate production-ready Docker configuration for your Express.js application.
      </p>

      <h2>Usage</h2>
      <div className="relative">
        <pre>
          <code>xacos make:docker</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos make:docker", "basic")}
        >
          {copied === "basic" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Generated Files</h2>
      <ul>
        <li><code>Dockerfile</code> - Multi-stage production build</li>
        <li><code>docker-compose.yml</code> - Services orchestration</li>
        <li><code>.dockerignore</code> - Files to exclude from image</li>
      </ul>

      <h2>Docker Compose Services</h2>
      <p>The generated docker-compose.yml includes:</p>
      <ul>
        <li>Your Express.js application</li>
        <li>PostgreSQL database (if using Prisma)</li>
        <li>MongoDB (if using MongoDB)</li>
        <li>Redis cache</li>
        <li>Network configuration</li>
        <li>Volume mounts for data persistence</li>
      </ul>

      <h2>Building the Image</h2>
      <div className="relative">
        <pre>
          <code>docker build -t my-api .</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("docker build -t my-api .", "build")}
        >
          {copied === "build" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Running with Docker Compose</h2>
      <div className="relative">
        <pre>
          <code>docker-compose up -d</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("docker-compose up -d", "compose")}
        >
          {copied === "compose" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Features</h2>
      <ul>
        <li>Multi-stage builds for optimized image size</li>
        <li>Non-root user for security</li>
        <li>Health checks</li>
        <li>Environment-based configuration</li>
        <li>Production optimizations</li>
      </ul>
    </div>
  );
}
