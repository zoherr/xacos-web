export default function TypeScriptGuidePage() {
  return (
    <div className="prose">
      <h1>TypeScript Guide</h1>
      <p>
        Learn how to leverage TypeScript in your Xacos project for type-safe backend development.
      </p>

      <h2>Getting Started with TypeScript</h2>
      <p>Initialize a new project with TypeScript:</p>
      <pre><code>xacos init my-api --ts</code></pre>

      <h2>Project Configuration</h2>
      <p>Xacos generates a tsconfig.json with optimal settings for Node.js development:</p>
      <pre><code>{`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`}</code></pre>

      <h2>Type Definitions</h2>
      <p>Create custom types in the <code>src/types</code> directory:</p>
      <pre><code>{`// src/types/user.ts
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export type CreateUserDto = Omit<User, 'id' | 'createdAt'>;`}</code></pre>

      <h2>Typed Controllers</h2>
      <pre><code>{`import { Request, Response } from 'express';
import { User } from '../types/user';

export const getUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user: User = await userService.findById(req.params.id);
  res.json(user);
};`}</code></pre>

      <h2>Benefits</h2>
      <ul>
        <li>Catch errors at compile time</li>
        <li>Better IDE autocomplete and IntelliSense</li>
        <li>Refactoring with confidence</li>
        <li>Self-documenting code</li>
        <li>Improved maintainability</li>
      </ul>

      <h2>Build Commands</h2>
      <pre><code>{`# Development with watch mode
npm run dev

# Production build
npm run build

# Run production build
npm start`}</code></pre>
    </div>
  );
}
