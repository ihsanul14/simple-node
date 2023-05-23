const mysql = require('mysql2/promise');
const env = require('../env')

export class MySQL{
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
  
    pool.getConnection((err:any, connection:any) => {
      if (err) {
        throw new Error(`Error connecting to MySQL: ${err}`);
      }
      console.log('Connected to MySQL!');
      connection.promise();
    });
    
    process.on('exit', () => {
      pool.end();
    });

    return pool
  }
}