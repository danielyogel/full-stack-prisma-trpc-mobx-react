#! /bin/sh

echo "Installing node_modules";
npm --prefix client ci;
npm --prefix server ci;

echo "building client dist";
npm --prefix client run build;

echo "building server dist";
npm --prefix server run build;
npm --prefix server prune --production;

# Fetch image name
NAME=$(node -e "console.log((require('./package.json')).name)");
VERSION=$(node -e "console.log((require('./package.json')).version)");
FULLNAME=$NAME:$VERSION;
echo "building $FULLNAME image";

# Build docker image
docker build . -t=$FULLNAME;

# Reinstalling server devDependencies
npm --prefix server i -D;
npx --prefix server prisma generate;
