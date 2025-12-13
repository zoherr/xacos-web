export default function ProjectStructurePage() {
  return (
    <div className="prose">
      <h1>Project Structure</h1>
      <p>
        Xacos generates a well-organized project structure following industry best practices
        for Express.js applications.
      </p>

      <h2>Directory Overview</h2>
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
│   ├── app.ts           # Express app setup
│   └── server.ts        # Server entry point
├── tests/               # Test files
│   ├── unit/
│   └── integration/
├── .env.example         # Environment variables template
├── .gitignore
├── tsconfig.json        # TypeScript configuration
├── package.json
└── README.md`}</code>
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
        with proper types for Express, your database ORM, and all other dependencies.
      </p>
    </div>
  );
}
