export default function DockerGuidePage() {
  return (
    <div className="prose">
      <h1>Docker Guide</h1>
      <p>
        Containerize your Express.js application with Docker for consistent development and production environments.
      </p>

      <h2>Generate Docker Configuration</h2>
      <pre><code>xacos make:docker</code></pre>

      <h2>Dockerfile</h2>
      <p>The generated Dockerfile uses multi-stage builds for optimization:</p>
      <pre><code>{`FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
EXPOSE 3000
CMD ["npm", "start"]`}</code></pre>

      <h2>Docker Compose</h2>
      <p>Run your entire stack with one command:</p>
      <pre><code>{`version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    depends_on:
      - db
      - redis

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:`}</code></pre>

      <h2>Common Commands</h2>
      <pre><code>{`# Build image
docker build -t my-api .

# Run container
docker run -p 3000:3000 my-api

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down`}</code></pre>

      <h2>Best Practices</h2>
      <ul>
        <li>Use multi-stage builds to reduce image size</li>
        <li>Run as non-root user for security</li>
        <li>Use .dockerignore to exclude unnecessary files</li>
        <li>Leverage build cache with proper layer ordering</li>
        <li>Use specific version tags instead of latest</li>
      </ul>
    </div>
  );
}
