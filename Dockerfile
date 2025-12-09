# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and npmrc for legacy-peer-deps
COPY package*.json ./
COPY .npmrc ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine AS runner

WORKDIR /app

# Copy built files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/start.js ./

# Install vite globally for preview server
RUN npm install -g vite@latest

# Expose port (default 3000, can be overridden with PORT env var)
EXPOSE 3000

# Set default environment variables
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NODE_ENV=production

# Start the server
CMD ["node", "start.js"]

