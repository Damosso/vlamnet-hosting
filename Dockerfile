FROM node:latest

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Expose port (adjust if needed)
EXPOSE 4173

# Start the application
CMD ["npm", "start"]
