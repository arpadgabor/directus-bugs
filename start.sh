#!/bin/sh
export CONFIG_PATH="./config.js"
export LOG_STYLE=raw
export CACHE_SCHEMA=false

npm run directus bootstrap
npm run schema:apply:1
npm run schema:apply:2
npm run directus start
