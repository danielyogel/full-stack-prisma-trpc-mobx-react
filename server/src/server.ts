import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';

import { prisma } from './dbClient';
import { getEnv } from './envSchema';
import { trpcRoutes } from './routes/trpc/router';

const env = getEnv();

console.log('=== env: ===');
console.dir(env);

const SERVER_PORT = 8080;

const app = express();

app.use(cookieParser());

const serverContext = { app, env, prisma };

trpcRoutes(serverContext);

app.use(express.static(path.resolve(__dirname, '../../../client/dist')));

app.get('*', (_, res) => {
  res.sendFile('client/dist/index.html', { root: '../' });
});

app.listen(SERVER_PORT, () => {
  console.log(`server started at port ${SERVER_PORT}`);
});
