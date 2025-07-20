FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY bun.lockb ./

# Install bun
RUN npm install -g bun

# Install dependencies
RUN bun install

# Copy source code
COPY . .

# Generate Prisma client
RUN bun exec prisma generate

# Build application
RUN bun run build

# Expose port
EXPOSE 5001

# Start application
CMD ["bun", "run", "start:prod"]
