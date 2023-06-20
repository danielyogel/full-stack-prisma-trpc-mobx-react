FROM node:16-bullseye-slim as base

ENV NODE_ENV production
RUN apt-get update && apt-get install -y openssl

FROM base as deps

WORKDIR /myapp

ADD package.json ./
ADD client/package.json ./client/
ADD server/package.json ./server/

RUN npm run install-production

FROM base as production-deps

WORKDIR /myapp


COPY --from=deps /myapp/node_modules /myapp/node_modules

ADD package.json ./
ADD client/package.json ./client/
ADD server/package.json ./server/

RUN npm prune --production
RUN cd client && npm prune --production
RUN cd server && npm prune --production

# Build the app
FROM base as build

WORKDIR /myapp

COPY --from=deps /myapp/node_modules /myapp/node_modules
# COPY --from=deps /myapp/client/node_modules /myapp/client/node_modules
# COPY --from=deps /myapp/server/node_modules /myapp/server/node_modules

ADD server/prisma ./server
RUN cd server && npx prisma generate

ADD . .
RUN npm run build-production

# Finally, build the production image with minimal footprint
FROM base

WORKDIR /myapp

COPY --from=production-deps /myapp/node_modules /myapp/node_modules
# COPY --from=production-deps /myapp/client/node_modules /myapp/client/node_modules


COPY --from=build /myapp/node_modules/.prisma /myapp/node_modules/.prisma

COPY --from=build /myapp/server/build /myapp/server/build
COPY --from=build /myapp/client/dist /myapp/client/dist
COPY --from=build /myapp/client/public /myapp/client/public

ADD package.json ./
ADD server/package.json ./server/
ADD server/prisma ./server/


CMD npm run run-production





