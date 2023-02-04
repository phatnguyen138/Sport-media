const Pool = require("pg").Pool

const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'Bovippro123',
    port: 8800,
})