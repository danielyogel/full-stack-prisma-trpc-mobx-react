# Full Stack Project Template

## Stack

- **Server**: Node, Express, Prisma, Postgres
- **Client**: Vue, Pinia, Element-plus
- **Test**: Jest, Playwright
- **Tools**: Typescript, Prettier, Eslint, Docker

## Init

Run once to set up the development environment.

1. `npm run compose` to start a postgres docker (with template database)
2. `npm run init` to install client & server dependencies + generate Prisma files.

## Development

1. `npm run dev-client` hot reload dev server (vite).
1. `npm run dev-server` hot reload dev server (nodemon).

## Build

1. `npm run docker-build` builds the docker image with both server & client. The build is tagged based on `package.json` name + version keys.
1. `npm run docker-run-locally` runs the docker image locally.

## Test

1. `npm run type-check` type check (compiles) both server & client.
1. `npm run lint` lint (eslint) both server & client.
1. `npm run test` Runs Jest tests for both server & client.
1. `npm run test-e2e` Run Playwright E2E tests (prerequisite: `npm run docker-run-locally`).

**Hint**: `npm run test-e2e:create` creates a new E2E test (prerequisite: `npm run docker-run-locally`).
