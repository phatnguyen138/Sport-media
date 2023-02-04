const Pool = require("pg").Pool

const pool = new Pool({
    user: 'phat',
    host: 'localhost',
    database: 'api',
    password: 'pass',
    port: 8800,
})