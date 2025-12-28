"use client";

export default function ProjectStructurePage() {
  return (
    <div className="prose">
      <h1>Project Structure</h1>
      <p>
        Xacos OS generates a well-organized project structure following industry best practices
        for Express.js applications. Choose between single projects or monorepos.
      </p>

      <h2>Single Project Structure</h2>
      <pre>
        <code>{`my-api/
├── src/
│   ├── config/          # Configuration files
│   │   ├── database.ts
│   │   ├── redis.ts
│   │   └── env.ts
│   ├── controllers/     # Request handlers
│   │   └── user.controller.ts
│   ├── middleware/      # Express middleware
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validation.middleware.ts
│   ├── models/          # Database models
│   │   └── user.model.ts
│   ├── routes/          # API routes
│   │   ├── index.ts
│   │   └── user.routes.ts
│   ├── services/        # Business logic
│   │   └── user.service.ts
│   ├── utils/           # Helper functions
│   │   ├── logger.ts
│   │   └── response.ts
│   ├── validators/      # Input validation schemas
│   │   └── user.validator.ts
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   ├── flows/           # Xacos pipelines (XFlow)
│   │   └── user.signup.flow.ts
│   ├── events/           # Event definitions
│   │   ├── user.created.ts
│   │   └── order.paid.ts
│   ├── adapters/        # Vendor-agnostic adapters
│   │   ├── mailer/
│   │   └── database/
│   ├── sockets/          # WebSocket/Socket.io
│   ├── queues/           # Message queues
│   ├── subscribers/      # Event subscribers
│   ├── app.ts            # Express app setup
│   └── server.ts         # Server entry point
├── tests/                # Test files
│   ├── unit/
│   └── integration/
├── .env.example          # Environment variables template
├── .gitignore
├── tsconfig.json         # TypeScript configuration
├── package.json
├── xacos.json            # Xacos configuration
└── README.md`}</code>
      </pre>

      <h2>Monorepo Structure</h2>
      <pre>
        <code>{`my-org/
├── apps/
│   ├── api/              # Express/Fastify backend
│   │   └── src/
│   ├── worker/           # BullMQ / cron jobs
│   │   └── src/
│   ├── realtime/         # WebSocket / Socket.io server
│   │   └── src/
│   ├── web/              # (future) Next.js
│   └── admin/            # (future) Admin dashboard
│
├── packages/
│   ├── config/           # shared env, eslint, tsconfig
│   │   ├── eslint-config/
│   │   ├── tsconfig/
│   │   └── env/
│   ├── logger/           # shared logger
│   ├── database/         # Prisma / DB clients
│   ├── auth/             # authentication logic
│   ├── mailer/           # vendor-agnostic mailer
│   └── events/           # typed event contracts
│
├── infra/
│   ├── docker/
│   ├── terraform/
│   └── k8s/
│
├── xacos.json            # Xacos configuration
├── package.json
└── pnpm-workspace.yaml   # or npm/yarn workspaces`}</code>
      </pre>

      <h2>Key Directories</h2>

      <h3>controllers/</h3>
      <p>
        Contains request handlers that receive HTTP requests and return responses.
        Controllers should be thin and delegate business logic to services.
      </p>

      <h3>services/</h3>
      <p>
        Contains business logic and data processing. Services interact with models
        and external APIs, keeping your controllers clean and focused.
      </p>

      <h3>models/</h3>
      <p>
        Database models and schemas. If using Prisma, this will contain your Prisma schema
        and generated types. For MongoDB, it contains Mongoose schemas.
      </p>

      <h3>routes/</h3>
      <p>
        API route definitions. Routes are automatically loaded and registered with the
        Express application.
      </p>

      <h3>middleware/</h3>
      <p>
        Custom Express middleware for authentication, validation, error handling,
        logging, and more.
      </p>

      <h3>config/</h3>
      <p>
        Configuration files for database connections, Redis, environment variables,
        and other application settings.
      </p>

      <h3>flows/</h3>
      <p>
        Xacos pipelines (XFlow) - typed, composable, event-driven workflows.
        Code-first alternative to visual workflow builders.
      </p>

      <h3>events/</h3>
      <p>
        Event definitions with typed contracts. First-class events for building
        distributed, event-driven systems.
      </p>

      <h3>adapters/</h3>
      <p>
        Vendor-agnostic adapter implementations. Switch between providers (Prisma/Mongoose,
        Resend/SMTP, etc.) at runtime without code changes.
      </p>

      <h3>validators/</h3>
      <p>
        Input validation schemas using libraries like Zod or Joi to ensure data
        integrity before processing requests.
      </p>

      <h3>utils/</h3>
      <p>
        Utility functions and helpers that can be reused across the application,
        such as logger, response formatters, and custom error classes.
      </p>

      <h2>Auto-wiring Routes</h2>
      <p>
        Xacos automatically discovers and registers all routes in the <code>routes/</code> directory.
        Simply create a new file with your route definitions, and it will be automatically
        loaded when the server starts.
      </p>

      <h2>TypeScript Support</h2>
      <p>
        When using the <code>--ts</code> flag, Xacos sets up a complete TypeScript configuration
        with proper types for Express, your database ORM, and all other dependencies. All generated
        code is 100% TypeScript-correct with zero <code>any</code> types (unless explicitly justified).
      </p>

      <h2>Monorepo Benefits</h2>
      <p>
        Monorepos enable you to:
      </p>
      <ul>
        <li>Share code across multiple services</li>
        <li>Maintain consistent tooling and configurations</li>
        <li>Build and test everything together</li>
        <li>Deploy services independently</li>
        <li>Manage dependencies centrally</li>
      </ul>
    </div>
  );
}
