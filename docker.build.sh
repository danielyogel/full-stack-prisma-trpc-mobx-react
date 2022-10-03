#! /bin/sh

echo "Installing node_modules";
npm run init;

echo "building client & server dist";
npm run build;
npm prune --production;

# Fetch image name
NAME=$(node -e "console.log((require('./package.json')).name)");
VERSION=$(node -e "console.log((require('./package.json')).version)");
FULLNAME=$NAME:$VERSION;
echo "building $FULLNAME image";

# Build docker image
docker build . -t=$FULLNAME;

# Reinstalling server devDependencies
npm i -D --workspaces;
cd server;
npx prisma generate;
cd ..;
