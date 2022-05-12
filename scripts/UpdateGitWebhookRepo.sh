#!/bin/sh

[ ! -d "$GITHUB_WEBHOOK_PATH" ] && echo "Directory $GITHUB_WEBHOOK_PATH DOES NOT exists." && exit 1

cd $GITHUB_WEBHOOK_PATH
git fetch && git reset --hard origin/main
npm run freshtsc
pm2 restart github-webhook

exit 0
