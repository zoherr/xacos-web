"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Copy, Terminal, Code2, Database, Boxes, Layers, Gauge, Github, ArrowRight, Zap, Shield, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState<string | null>(null);
  const primaryCommand = "npx xacos init my-api --ts --prisma";

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const features = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "TypeScript Support",
      description: "Full TypeScript support with type safety and modern ES features built in."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Database Ready",
      description: "Integrated MongoDB or Prisma ORM setup with migrations and models."
    },
    {
      icon: <Boxes className="h-8 w-8 text-primary" />,
      title: "Redis Caching",
      description: "Built-in Redis integration for caching and session management."
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Message Queues",
      description: "BullMQ integration for background jobs and message processing."
    },
    {
      icon: <Terminal className="h-8 w-8 text-primary" />,
      title: "Docker Support",
      description: "Production-ready Docker configuration with multi-stage builds."
    },
    {
      icon: <Gauge className="h-8 w-8 text-primary" />,
      title: "CI/CD Ready",
      description: "GitHub Actions workflows for testing and deployment included."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Initialize",
      description: "Create a new project with your preferred configuration",
      command: "npx xacos init my-api --ts"
    },
    {
      number: "02",
      title: "Add Features",
      description: "Extend your project with additional integrations",
      command: "xacos add auth"
    },
    {
      number: "03",
      title: "Deploy",
      description: "Ship to production with Docker or your favorite platform",
      command: "docker-compose up -d"
    }
  ];

  const whyXacos = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Fast Setup",
      description: "Go from idea to running API in under 2 minutes"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Production Ready",
      description: "Security best practices and error handling built-in"
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Scalable Architecture",
      description: "Professional folder structure that grows with your team"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl">
              <Terminal className="h-6 w-6 text-primary" />
              <span>Xacos</span>
            </Link>
            <nav className="flex items-center gap-8">
              <Link href="/docs" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/50 px-4 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-medium text-foreground">Backend scaffolding for Node.js</span>
              </div>

              <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Build production-ready{" "}
                <span className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
                  Express.js
                </span>{" "}
                backends
              </h1>

              <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Scaffold professional Express.js backends with TypeScript, Prisma, Redis, and Docker.
                Zero configuration, industry best practices built-in.
              </p>

              <div className="flex flex-col items-center gap-6">
                <div className="relative w-full max-w-2xl">
                  <div className="flex items-center gap-2 rounded-lg border bg-muted/50 px-4 py-3">
                    <Terminal className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <code className="flex-1 text-sm font-mono overflow-x-auto">
                      {primaryCommand}
                    </code>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 flex-shrink-0"
                      onClick={() => copyToClipboard(primaryCommand, "hero")}
                    >
                      {copied === "hero" ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button asChild size="lg" className="gap-2 h-12 px-8">
                    <Link href="/docs">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2 h-12 px-8">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Everything you need
              </h2>
              <p className="text-lg text-muted-foreground">
                Built-in support for the tools you need to build production-ready APIs
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div key={index} className="relative group">
                    <div className="flex flex-col gap-4 p-6 rounded-lg border bg-card hover:shadow-md transition-all">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                How it works
              </h2>
              <p className="text-lg text-muted-foreground">
                Three simple steps to your production-ready backend
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="w-full rounded-lg border bg-card px-4 py-3">
                      <code className="text-sm font-mono text-center block">
                        {step.command}
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                  Example workflow
                </h2>
                <p className="text-lg text-muted-foreground">
                  From zero to deployed in minutes
                </p>
              </div>

              <div className="rounded-xl border bg-card p-8 shadow-sm">
                <div className="space-y-6">
                  {[
                    { label: "Initialize project", command: "npx xacos init my-api --ts --prisma", id: "workflow1" },
                    { label: "Add Redis caching", command: "xacos create:redis", id: "workflow2" },
                    { label: "Generate Docker config", command: "xacos make:docker", id: "workflow3" },
                    { label: "Deploy", command: "docker-compose up -d", id: "workflow4" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {item.label}
                        </span>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-8 w-8"
                          onClick={() => copyToClipboard(item.command, item.id)}
                        >
                          {copied === item.id ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                        </Button>
                      </div>
                      <div className="rounded-lg bg-muted px-4 py-3">
                        <code className="text-sm font-mono block overflow-x-auto">
                          {item.command}
                        </code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
                Why Xacos?
              </h2>
              <p className="text-lg text-muted-foreground">
                Built by developers, for developers who value their time
              </p>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                {whyXacos.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                Ready to build your next backend?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Join developers building production-ready backends with Xacos
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="gap-2 h-12 px-8">
                  <Link href="/docs">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 h-12 px-8">
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-3">
              <Link href="/" className="flex items-center gap-2.5 font-bold text-xl">
                <Terminal className="h-6 w-6 text-primary" />
                <span>Xacos</span>
              </Link>
              <p className="text-sm text-muted-foreground text-center md:text-left">
                Built with ❤️ for the Node.js community
              </p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                License
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
