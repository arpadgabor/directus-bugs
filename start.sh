#!/bin/sh
export CONFIG_PATH="./config.js"
export LOG_STYLE=raw
export CACHE_SCHEMA=false

npm run directus bootstrap
npm run schema:apply
npm run directus start
