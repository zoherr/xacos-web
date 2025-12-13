"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "/docs" },
      { title: "Quick Start", href: "/docs/quick-start" },
      { title: "Project Structure", href: "/docs/project-structure" },
    ],
  },
  {
    title: "Commands",
    items: [
      { title: "init", href: "/docs/commands/init" },
      { title: "add", href: "/docs/commands/add" },
      { title: "create:redis", href: "/docs/commands/create-redis" },
      { title: "create:prisma", href: "/docs/commands/create-prisma" },
      { title: "create:ws", href: "/docs/commands/create-ws" },
      { title: "create:socket.io", href: "/docs/commands/create-socketio" },
      { title: "create:message-queue", href: "/docs/commands/create-message-queue" },
      { title: "create:pub-sub", href: "/docs/commands/create-pub-sub" },
      { title: "make:docker", href: "/docs/commands/make-docker" },
      { title: "make:git-action", href: "/docs/commands/make-git-action" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "TypeScript", href: "/docs/guides/typescript" },
      { title: "MongoDB", href: "/docs/guides/mongodb" },
      { title: "Prisma", href: "/docs/guides/prisma" },
      { title: "Redis", href: "/docs/guides/redis" },
      { title: "Docker", href: "/docs/guides/docker" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl">
              <Image src="/logo.png" alt="Xacos" width={30} height={30} />
              <span>Xacos</span>
            </Link>
            <nav className="flex items-center gap-8">
              <Link href="/docs" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hidden md:block">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-10 w-10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="flex-1 pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-start gap-8 lg:gap-12">
            <aside className={`fixed top-16 left-0 z-30 ${mobileMenuOpen ? 'block' : 'hidden'} h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r bg-white md:relative md:top-0 md:block md:w-[240px] lg:w-[280px] md:h-auto md:border-0`}>
              <div className="py-8 px-6 md:px-0 md:pr-8 lg:pr-12">
                <nav className="space-y-8">
                  {navigation.map((section) => (
                    <div key={section.title}>
                      <h4 className="mb-3 text-sm font-semibold tracking-tight">
                        {section.title}
                      </h4>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-red-50 ${pathname === item.href
                              ? "bg-red-50 font-medium text-primary"
                              : "text-muted-foreground hover:text-foreground"
                              }`}
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </aside>

            <main className="flex-1 min-w-0 py-8 md:py-12">
              <div className="mx-auto w-full max-w-3xl">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-3">
              <Link href="/" className="flex items-center gap-2.5 font-bold text-xl">
                <Image src="/logo.png" alt="Xacos" width={30} height={30} />
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
