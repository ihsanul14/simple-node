const Logger = require("../logger");

const mysql = require('mysql2/promise');
const env = require('../env')
const logger = new Logger()

class MySQL{
  Connect(){
    var pool = mysql.createPool({
      host: env.database.mysql.host,
      user: env.database.mysql.user,
      password: env.database.mysql.password,
      database: env.database.mysql.database,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
    
    process.on('exit', () => {
      pool.end();
    });

    return pool
  }
}

module.exports = MySQL