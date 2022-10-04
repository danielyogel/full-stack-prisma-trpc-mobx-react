# Full Stack Project Template

##Stack

- **Server**: Node, Express, Prisma, Postgres
- **Client**: Vue, Pinia, Element-plus
- **Test**: Jest, Playwright
- **Tools**: Typescript. Docker, Prettier

## Init

Run once to set up the development environment.

1. `npm run compose` to start a postgres docker (with template database)
2. `npm run init` to install client & server dependencies + generate Prisma files.

## Development

1. `npm run dev-client` hot reload dev server (vite).
1. `npm run dev-server` hot reload dev server (nodemon).

## Build

Use `npm run docker-build` to build a docker image, the build tag is based on `package.json` name + version keys. You can run the docker image locally by `npm run docker-run-locally`;

## Test

1. `test-api` Test server apis (Jest).
1. `test-api` E2E tests (Playwright).
