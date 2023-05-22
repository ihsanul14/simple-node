const mysql = require('mysql2/promise');

export class MySQL{
  Connect(){
    var pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'A123b456c',
      database: 'mydb',
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