# Use Node.js 20 Alpine as the base image
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the code
COPY . .

# Build the client and server
RUN npm run build

# Production image
FROM node:20-alpine AS production
WORKDIR /app

# Copy only the built output and necessary files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Expose port 5000
EXPOSE 5000

# Start the server
CMD ["node", "dist/index.js"] 