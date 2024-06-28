FROM node:22.3.0-alpine3.19

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container ( meta data )
COPY package*.json ./

# get dependencies with npm install
RUN npm install

# Copy the application code to the container
COPY . .

# Build the React.js application
RUN npm run build

# Expose the container port to run
EXPOSE 3000

# Start the application
CMD ["npm", "start"]