FROM node:16.17-alpine

WORKDIR /app

# Copy order set to optimaze build time
COPY server/node_modules server/node_modules
COPY server/dist server/dist
COPY server/prisma server/prisma
COPY client/dist client/dist
# Since the image tag is queried from the package.json.version, the file is copyied last
COPY package*.json .

WORKDIR /app/server
RUN npx prisma generate

WORKDIR /app
EXPOSE 8080

# Run the server
CMD node server/dist/server.js
