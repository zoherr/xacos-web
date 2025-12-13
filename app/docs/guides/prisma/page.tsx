export default function PrismaGuidePage() {
  return (
    <div className="prose">
      <h1>Prisma Guide</h1>
      <p>
        Prisma is a next-generation ORM that provides type-safe database access for your Express.js application.
      </p>

      <h2>Adding Prisma to Your Project</h2>
      <pre><code>xacos create:prisma</code></pre>

      <h2>Define Your Schema</h2>
      <p>Edit <code>prisma/schema.prisma</code> to define your data models:</p>
      <pre><code>{`generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  name      String
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(uuid())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  String
  createdAt DateTime @default(now())
}`}</code></pre>

      <h2>Running Migrations</h2>
      <pre><code>{`# Create a migration
npx prisma migrate dev --name add-user-model

# Generate Prisma Client
npx prisma generate

# Apply migrations in production
npx prisma migrate deploy`}</code></pre>

      <h2>Using Prisma Client</h2>
      <pre><code>{`import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create a user
const user = await prisma.user.create({
  data: {
    email: 'alice@example.com',
    name: 'Alice',
  },
});

// Find all users
const users = await prisma.user.findMany({
  include: { posts: true },
});

// Update a user
const updated = await prisma.user.update({
  where: { id: user.id },
  data: { name: 'Alice Updated' },
});`}</code></pre>

      <h2>Prisma Studio</h2>
      <p>Open Prisma Studio to manage your data visually:</p>
      <pre><code>npx prisma studio</code></pre>
    </div>
  );
}
