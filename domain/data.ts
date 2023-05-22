import { MySQL } from "../framework/database/mysql";

const mysql = new MySQL()
export class DataDomain{
    async GetData(req:any){
        var query = "SELECT * FROM testing"
        if (req.id > 0){
            query = `SELECT * from testing WHERE id = ${req.id}`
        }
        const connection = await mysql.Connect().getConnection();
        const [data] = await connection.query(query);
        connection.release();
        return data
    }
    
    async CreateData(req:any){
        var query = `INSERT INTO testing (nama, created_at) VALUES (?, now())`
        const connection = await mysql.Connect().getConnection();
        await connection.query(query,[req.nama]);
        connection.release();
        return req.nama
    }
    
    async UpdateData(req:any){
        var query = `UPDATE testing SET nama = ?, updated_at = now() WHERE id = ?`
        const connection = await mysql.Connect().getConnection();
        await connection.query(query,[req.nama, req.id]);
        connection.release();
        return req.id
    }
    
    async DeleteData(req:any){
        var query = `DELETE FROM testing WHERE id = ${req.id}`
        const connection = await mysql.Connect().getConnection();
        await connection.query(query);
        connection.release();
        return req.id
    }
}
