FROM node:20

# Create application directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 5000

# Command to start the application
CMD [ "node", "server.js" ]