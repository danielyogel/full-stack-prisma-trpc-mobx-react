# Full Stack Prisma tRPC MobX React

## Development

1. **requried environment variable**: "DATABASE_URL" - PostgreSQL connection string.  
   using a direct environment variable, or an `.env` file inside the "server" dir.
2. run `npm run install-all`
3. run `npm run dev`

## Init CICD

1. Activate Github Actions for your repo.
2. Signup to fly.io, then login using fly's command line tool `fly auth login`
3. add a token to the Github repo, click "New repository secret" button, enter the name as FLY_API_TOKEN, and copy `fly tokens create deploy -x 999999h` output.
4. run `fly launch` in the main dir,
5. when asked - say yes for postgresql.
6. add `release_command = "npm run release-command"` under `[deploy]` (as appears in the existing fly.toml file.)
7. push the fly.toml, and validate that the action runs successfully.
