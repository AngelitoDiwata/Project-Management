// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    development: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            port: 8080,
            user: 'root',
            password: '',
            database: 'ProjectMaster'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};