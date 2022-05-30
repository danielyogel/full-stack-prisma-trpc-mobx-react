FROM node:14.17


RUN apt-get update
RUN npm install -g npm@7.20.1



# Create an app directory in the docker
WORKDIR /app

# Copy local code to the container image.  TODO: Should be after install in the future - for faster docker builds
COPY . ./

# Copy the package.json and package-lock.json. 
# COPY package*.json ./

# Install production dependencies.
RUN npm run install-production
RUN npm run build-production

EXPOSE 8080


# Run the server
CMD npm run run-production