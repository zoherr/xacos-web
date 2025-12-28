"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function EventsListPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>xacos events:list</h1>
      <p>
        List all registered events in your system. Events are first-class citizens in Xacos OS,
        enabling distributed, event-driven architectures.
      </p>

      <h2>Usage</h2>
      <div className="relative">
        <pre>
          <code>xacos events:list</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() => copyToClipboard("xacos events:list", "list")}
        >
          {copied === "list" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Output</h2>
      <p>The command displays all registered events with their types and subscribers:</p>
      <pre>
        <code>{`Events:
  user.created
    Type: UserCreatedEvent
    Subscribers: email.welcome, analytics.signup
    
  order.paid
    Type: OrderPaidEvent
    Subscribers: notify.vendor, update.inventory
    
  email.sent
    Type: EmailSentEvent
    Subscribers: analytics.track`}</code>
      </pre>

      <h2>Event Structure</h2>
      <p>Events are defined in the <code>src/events/</code> directory:</p>
      <pre>
        <code>{`events/
├── user.created.ts
├── order.paid.ts
└── email.sent.ts`}</code>
      </pre>

      <h2>Event Definition Example</h2>
      <pre>
        <code>{`// src/events/user.created.ts
import { defineEvent } from "@xacos/events";

export interface UserCreatedEvent {
  userId: string;
  email: string;
  name: string;
  createdAt: Date;
}

export const userCreated = defineEvent<UserCreatedEvent>("user.created");`}</code>
      </pre>

      <h2>Subscribing to Events</h2>
      <pre>
        <code>{`import { on } from "@xacos/events";
import { UserCreatedEvent } from "./events/user.created";

on("user.created", async (payload: UserCreatedEvent) => {
  await sendWelcomeEmail(payload.email);
  await trackSignup(payload.userId);
});`}</code>
      </pre>

      <h2>Related Commands</h2>
      <ul>
        <li><code>xacos events:graph</code> - Visualize event dependencies</li>
      </ul>
    </div>
  );
}

