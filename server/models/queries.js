const {Pool, Client} = require('pg')
const dotEnv = require('dotenv');

dotEnv.config()
password = process.env.DATABASE_PASS;
userName = 'phat'

var pool = new Pool({
    database: 'social',
    user: userName,
    password: password,
    port: 5432
})


module.exports = pool;