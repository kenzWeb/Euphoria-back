FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy source code
COPY . .

# Generate Prisma client
RUN pnpm exec prisma generate

# Build application
RUN pnpm run build

# Expose port
EXPOSE 5001

# Start application
CMD ["pnpm", "run", "start:prod"]
