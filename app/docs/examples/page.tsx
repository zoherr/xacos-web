"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function ExamplesPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="prose">
      <h1>Examples</h1>
      <p>
        Complete examples for building single projects and monorepos with Xacos OS,
        using both JavaScript and TypeScript.
      </p>

      <h2>Single Project Examples</h2>

      <h3>JavaScript Single Project</h3>
      <p>Create a complete JavaScript backend project:</p>
      <div className="relative">
        <pre>
          <code>{`# 1. Initialize project
npx xacos init my-api --js --mongodb --redis

# 2. Navigate to project
cd my-api

# 3. Install dependencies
npm install

# 4. Add modules
npx xacos add Users --crud
npx xacos add Products --crud --events
npx xacos add Orders --crud --events

# 5. Add features
npx xacos create:message-queue
npx xacos add:adapter mailer resend

# 6. Start development
npm run dev`}</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() =>
            copyToClipboard(
              `# 1. Initialize project\nnpx xacos init my-api --js --mongodb --redis\n\n# 2. Navigate to project\ncd my-api\n\n# 3. Install dependencies\nnpm install\n\n# 4. Add modules\nnpx xacos add Users --crud\nnpx xacos add Products --crud --events\nnpx xacos add Orders --crud --events\n\n# 5. Add features\nnpx xacos create:message-queue\nnpx xacos add:adapter mailer resend\n\n# 6. Start development\nnpm run dev`,
              "js-single"
            )
          }
        >
          {copied === "js-single" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>TypeScript Single Project</h3>
      <p>Create a complete TypeScript backend project:</p>
      <div className="relative">
        <pre>
          <code>{`# 1. Initialize project
npx xacos init my-api --ts --prisma --redis

# 2. Navigate to project
cd my-api

# 3. Install dependencies
npm install

# 4. Setup Prisma
npx prisma generate
npx prisma migrate dev

# 5. Add modules
npx xacos add Users --crud --events
npx xacos add Products --crud --events
npx xacos add Orders --crud --events

# 6. Add features
npx xacos create:flow order.process
npx xacos add:adapter mailer resend
npx xacos create:message-queue

# 7. Build and start
npm run build
npm start`}</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() =>
            copyToClipboard(
              `# 1. Initialize project\nnpx xacos init my-api --ts --prisma --redis\n\n# 2. Navigate to project\ncd my-api\n\n# 3. Install dependencies\nnpm install\n\n# 4. Setup Prisma\nnpx prisma generate\nnpx prisma migrate dev\n\n# 5. Add modules\nnpx xacos add Users --crud --events\nnpx xacos add Products --crud --events\nnpx xacos add Orders --crud --events\n\n# 6. Add features\nnpx xacos create:flow order.process\nnpx xacos add:adapter mailer resend\nnpx xacos create:message-queue\n\n# 7. Build and start\nnpm run build\nnpm start`,
              "ts-single"
            )
          }
        >
          {copied === "ts-single" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Monorepo Examples</h2>

      <h3>JavaScript Monorepo</h3>
      <p>Create a JavaScript monorepo with multiple services:</p>
      <div className="relative">
        <pre>
          <code>{`# 1. Initialize monorepo
npx xacos init my-org --js

# 2. Navigate to monorepo
cd my-org

# 3. Install dependencies
npm install

# 4. Add services (if supported)
# API service
cd apps/api
npx xacos add Users --crud
npx xacos add Products --crud

# Worker service
cd ../worker
npx xacos create:message-queue

# 5. Start all services
cd ../..
npm run dev`}</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() =>
            copyToClipboard(
              `# 1. Initialize monorepo\nnpx xacos init my-org --js\n\n# 2. Navigate to monorepo\ncd my-org\n\n# 3. Install dependencies\nnpm install\n\n# 4. Add services (if supported)\n# API service\ncd apps/api\nnpx xacos add Users --crud\nnpx xacos add Products --crud\n\n# Worker service\ncd ../worker\nnpx xacos create:message-queue\n\n# 5. Start all services\ncd ../..\nnpm run dev`,
              "js-monorepo"
            )
          }
        >
          {copied === "js-monorepo" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h3>TypeScript Monorepo</h3>
      <p>Create a TypeScript monorepo with multiple services:</p>
      <div className="relative">
        <pre>
          <code>{`# 1. Initialize monorepo
npx xacos init my-org --ts

# 2. Navigate to monorepo
cd my-org

# 3. Install dependencies
npm install

# 4. Setup shared packages
cd packages/database
npx xacos create:prisma

# 5. Add services
# API service
cd ../../apps/api
npx xacos add Users --crud --events
npx xacos add Products --crud --events
npx xacos create:flow order.process

# Worker service
cd ../worker
npx xacos create:message-queue

# 6. Build and start
cd ../..
npm run build
npm start`}</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2"
          onClick={() =>
            copyToClipboard(
              `# 1. Initialize monorepo\nnpx xacos init my-org --ts\n\n# 2. Navigate to monorepo\ncd my-org\n\n# 3. Install dependencies\nnpm install\n\n# 4. Setup shared packages\ncd packages/database\nnpx xacos create:prisma\n\n# 5. Add services\n# API service\ncd ../../apps/api\nnpx xacos add Users --crud --events\nnpx xacos add Products --crud --events\nnpx xacos create:flow order.process\n\n# Worker service\ncd ../worker\nnpx xacos create:message-queue\n\n# 6. Build and start\ncd ../..\nnpm run build\nnpm start`,
              "ts-monorepo"
            )
          }
        >
          {copied === "ts-monorepo" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>

      <h2>Understanding xacos.json</h2>
      <p>
        The <code>xacos.json</code> file is the configuration file that Xacos uses to track
        your project settings and metadata. It stores information about your project
        configuration, adapters, plugins, and more.
      </p>

      <h3>What is xacos.json?</h3>
      <p>
        <code>xacos.json</code> is automatically created when you initialize a project.
        It serves as the source of truth for your project configuration and allows Xacos
        to understand your project structure and settings.
      </p>

      <h3>Example xacos.json</h3>
      <pre>
        <code>{`{
  "ts": true,
  "mongodb": false,
  "prisma": true,
  "redis": true,
  "ws": false,
  "socketIo": false,
  "adapters": {
    "db": ["prisma"],
    "mailer": ["resend"],
    "queue": ["bullmq"]
  },
  "activeAdapters": {
    "db": "prisma",
    "mailer": "resend"
  },
  "plugins": ["auth-jwt", "stripe"]
}`}</code>
      </pre>

      <h3>Configuration Fields</h3>
      <ul>
        <li><code>ts</code> - Whether TypeScript is enabled</li>
        <li><code>mongodb</code> - Whether MongoDB is configured</li>
        <li><code>prisma</code> - Whether Prisma is configured</li>
        <li><code>redis</code> - Whether Redis is configured</li>
        <li><code>ws</code> - Whether native WebSocket is enabled</li>
        <li><code>socketIo</code> - Whether Socket.io is enabled</li>
        <li><code>adapters</code> - List of installed adapters by type</li>
        <li><code>activeAdapters</code> - Currently active adapters</li>
        <li><code>plugins</code> - List of installed plugins</li>
      </ul>

      <h3>How Xacos Uses xacos.json</h3>
      <p>
        When you run Xacos commands, it reads <code>xacos.json</code> to:
      </p>
      <ul>
        <li>Determine if TypeScript or JavaScript is being used</li>
        <li>Know which database adapter is configured</li>
        <li>Track installed adapters and plugins</li>
        <li>Generate code with the correct syntax and structure</li>
        <li>Maintain consistency across your project</li>
      </ul>

      <h3>Monorepo Configuration</h3>
      <p>
        In a monorepo, each service can have its own <code>xacos.json</code> file,
        or you can have a single root <code>xacos.json</code> that applies to all services.
        This allows you to manage configurations at different levels of your monorepo.
      </p>

      <h2>Next Steps</h2>
      <p>After following these examples, you can:</p>
      <ul>
        <li>Explore the generated project structure</li>
        <li>Add more modules and features</li>
        <li>Configure adapters and plugins</li>
        <li>Set up deployment with <code>xacos deploy</code></li>
        <li>Monitor your application with <code>xacos monitor</code></li>
      </ul>
    </div>
  );
}

