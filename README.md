# Full Stack Prisma tRPC MobX React

1. **requried environment variable**: "DATABASE_URL" - PostgreSQL connection string.  
   using a direct environment variable, or an `.env` file inside the "server" dir.
2. run `npm run install-all`
3. run `npm run dev`

## Notes

1. If Postgres DB is down, See: https://stackoverflow.com/questions/42653690/psql-could-not-connect-to-server-no-such-file-or-directory-5432-error/50882756
2. Example of an `.env` file: DATABASE_URL="postgresql://daniel:daniel@localhost:5432/postgres?schema=full-stack-starter"
3. install volta - `curl https://get.volta.sh | bash` (volta is similar to docker -locks node & npm versions)
