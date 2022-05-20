// Подключение к нашей БД

const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Nikita1337",
    host: "localhost",
    port: 5432,
    database: "postgres"
});

module.exports = pool;
