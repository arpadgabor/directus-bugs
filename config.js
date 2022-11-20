// @ts-check

/** @param {Record<string, string>} env */
module.exports = function (env) {
  return {
    HOST: '0.0.0.0',
    PORT: env.PORT ?? 8055,

    ADMIN_EMAIL: env.ADMIN_EMAIL || 'test@mail.com',
    ADMIN_PASSWORD: env.ADMIN_PASSWORD || 'test',

    DB_CLIENT: 'pg',
    DB_PORT: env.DB_PORT ?? 5432,
    DB_HOST: env.DB_HOST ?? 'localhost',

    DB_DATABASE: env.DB_DATABASE || 'testdb',
    DB_USER: env.DB_USER || 'testdb',
    DB_PASSWORD: env.DB_PASSWORD || 'testdb',

    KEY: env.KEY || 'testtest',
    SECRET: env.SECRET || 'testtest',

    CORS_ENABLED: true,
    CORS_ORIGIN: true,
    CORS_METHODS: 'GET,POST,PATCH,DELETE,OPTIONS',
  }
}
