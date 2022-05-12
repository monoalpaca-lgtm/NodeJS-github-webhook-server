#!/bin/sh

[ ! -d "$GITHUB_WEBHOOK_PATH" ] && echo "Directory $GITHUB_WEBHOOK_PATH DOES NOT exists."

cd $GITHUB_WEBHOOK_PATH
git fetch && git reset --hard origin/main
npm run tsc
