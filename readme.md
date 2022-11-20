# Directus database lock reproduction

This repo shows a reproduction of [#16493](https://github.com/directus/directus/issues/16493).

## Steps

- `docker compose up -d`
- `./start.sh`
- On the second snapshot apply you will notice the command hangs and never fulfills.

This bug is likely caused by postgres for some weird reason hangs when Directus queries the `information_schema.columns` table to get the state of the database. On the first apply the database is empty, on the second apply we have a pretty large schema already inside the database.