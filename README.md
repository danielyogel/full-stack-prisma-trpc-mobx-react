# Full Stack Prisma tRPC MobX React

## Development

1. **requried environment variable**: "DATABASE_URL" - PostgreSQL connection string.  
   using a direct environment variable, or an `.env` file inside the "server" dir.
2. run `npm run install-all`
3. run `npm run dev`

## Init CICD

0. Turn on Github Actions for your repo.
1. Signup to fly.io using fly command line tool.
2. create a token using `fly tokens create deploy -x 999999h` and add a it under the Settings tab, go to Secrets and variables and select Actions. Click on the green "New repository secret" button, enter the name as FLY_API_TOKEN, and copy the token as the secret.
3. run `fly launch` in the main dir, and when asked say yes for postgresql. **after this step fly.toml should look the same with a different app name. 'release_command' must stay the same. Aslo make you sure there is enough RAM**
4. when you push a new commit - CICD will run.
