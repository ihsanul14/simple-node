import mysql from 'mysql2/promise';
import env from '../env/index'

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
    
    process.on('exit', () => {
      pool.end();
    });

    return pool
  }
}