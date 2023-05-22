const mysql = require('mysql2/promise');

export const mysql_pool = () => {
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
      
      // Close the connection pool when the application exits
      process.on('exit', () => {
        pool.end();
      });

      return pool
}