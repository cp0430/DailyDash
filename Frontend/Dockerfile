# Use Node.js as base image
FROM node:lts-buster-slim

WORKDIR /app

# Copy dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy project files
COPY . .

# Expose the Vite dev server port
EXPOSE 5173

# Run Vite dev server
CMD ["npm", "run", "dev"]
