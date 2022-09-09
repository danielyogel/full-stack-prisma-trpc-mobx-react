#!/bin/sh

# Create a vue client and use it as main
echo "Init new Vue 3 client";
npm init vue@3 client -y -- --typescript --router --pinia;
echo "Install Vue";
cd client;
npm i @trpc/client@9.25.3 superjson@1.9.1;
npm i;

# # Update config files
echo "copy files from current client";
cd ..;
cp -r ./src/api/ ./client/src/;
cp -r ./src/utils/ ./client/src/;
cp -f ./src/vite.config.ts ./client/vite.config.ts;

echo "move to client directory";
rm -r ../client
mv client ../client
