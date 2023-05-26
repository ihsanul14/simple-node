import {MySQL} from '../framework/database/mysql.js'
const mysql = new MySQL()
export class DataDomain{
    async GetData(){
        var query = "SELECT * FROM testing"
        const connection = await mysql.Connect().getConnection();
        const [data] = await connection.query(query);
        connection.release();
        if (data.length === 0){
            throw {code: 404, message: `no data found`}
        }
        return data
    }

    async GetDataById(id){
        var query = "SELECT * FROM testing where id = ?"
        const connection = await mysql.Connect().getConnection();
        const [data] = await connection.query(query,[id]);
        connection.release();
        if (data.length === 0){
            throw {code: 404, message: `no data found with id ${id}`}
        }
        return data
    }
    
    async CreateData(req){
        var query = `INSERT INTO testing (nama, created_at) VALUES (?, now())`
        const connection = await mysql.Connect().getConnection();
        await connection.query(query,[req.nama]);
        connection.release();
        return req.nama
    }
    
    async UpdateData(id,req){
        var query = `UPDATE testing SET nama = ?, updated_at = now() WHERE id = ?`
        const connection = await mysql.Connect().getConnection();
        await connection.query(query,[req.nama, id]);
        connection.release();
        return id
    }
    
    async DeleteData(id){
        var query = `DELETE FROM testing WHERE id = ?`
        const connection = await mysql.Connect().getConnection();
        await connection.query(query,[id]);
        connection.release();
        return id
    }
}
