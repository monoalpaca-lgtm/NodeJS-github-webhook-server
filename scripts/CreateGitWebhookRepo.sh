#!/bin/bash

[ ! -d "$GITHUB_WEBHOOK_PATH" ] && echo "Directory $GITHUB_WEBHOOK_PATH DOES NOT exists." && mkdir -p $GITHUB_WEBHOOK_PATH

cd $GITHUB_WEBHOOK_PATH

git clone https://github.com/monoalpaca-lgtm/NodeJS-github-webhook-server.git .

if [ $? -eq 0 ]; then
   echo "Successful clone"
else
   echo FAIL
   exit 1
fi

npm run freshtsc

if [ $? -eq 0 ]; then
   echo "Successful compile"
else
   echo FAIL
   exit 2
fi

pm2 start ecosystem.config.js --env production
