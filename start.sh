#!/bin/sh
export CONFIG_PATH="./config.js"
export LOG_STYLE=raw
export CACHE_SCHEMA=false

npm run directus bootstrap
npm run directus schema apply snapshot.yaml --yes
npm run directus start
