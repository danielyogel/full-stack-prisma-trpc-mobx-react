FROM node:16.17-alpine

WORKDIR /app

# Copy order set to optimaze build time
# server/node_modules/@trpc/server is copied seprately due to tslib issue(?)
# Since the image tag is queried from the package.json.version, the file is copyied last
COPY node_modules node_modules
COPY server/node_modules/@trpc server/node_modules/@trpc
COPY client/node_modules/@trpc client/node_modules/@trpc
COPY server/prisma server/prisma

# Building Prisma (should move to post install)
WORKDIR /app/server
RUN npx prisma generate
WORKDIR /app

# Copy code
COPY server/dist server/dist
COPY client/dist client/dist
COPY package*.json .

EXPOSE 8080

# Run the server
CMD node server/dist/server.js
