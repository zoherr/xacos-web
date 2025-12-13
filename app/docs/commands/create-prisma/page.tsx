export default function CreatePrismaPage() {
  return (
    <div className="prose">
      <h1>xacos create:prisma</h1>
      <p>
        Add Prisma ORM to your project for type-safe database access with PostgreSQL, MySQL, or SQLite.
      </p>

      <h2>Usage</h2>
      <pre>
        <code>xacos create:prisma</code>
      </pre>

      <h2>What Gets Created</h2>
      <ul>
        <li>Prisma schema file</li>
        <li>Prisma client configuration</li>
        <li>Database connection setup</li>
        <li>Migration scripts</li>
        <li>Example models and queries</li>
      </ul>

      <h2>Configuration</h2>
      <p>Update your .env with database connection URL:</p>
      <pre>
        <code>DATABASE_URL="postgresql://user:password@localhost:5432/mydb"</code>
      </pre>

      <h2>Running Migrations</h2>
      <pre>
        <code>{`npx prisma migrate dev --name init
npx prisma generate`}</code>
      </pre>

      <h2>Features</h2>
      <ul>
        <li>Type-safe database queries</li>
        <li>Automatic migrations</li>
        <li>Database introspection</li>
        <li>Prisma Studio for data management</li>
        <li>Multiple database support</li>
      </ul>
    </div>
  );
}
