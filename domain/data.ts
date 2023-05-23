import { MySQL } from "../framework/database/mysql";

const mysql = new MySQL()
export class DataDomain{
    async GetData(){
        var query = "SELECT * FROM testing"
        const connection = await mysql.Connect().getConnection();
        const [data] = await connection.query(query);
        connection.release();
        return data
    }

    async GetDataById(id:number){
        var query = "SELECT * FROM testing where id = ?"
        const connection = await mysql.Connect().getConnection();
        const [data] = await connection.query(query,[id]);
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
    
    async UpdateData(id:number,req:any){
        var query = `UPDATE testing SET nama = ?, updated_at = now() WHERE id = ?`
        const connection = await mysql.Connect().getConnection();
        await connection.query(query,[req.nama, id]);
        connection.release();
        return id
    }
    
    async DeleteData(id:number){
        var query = `DELETE FROM testing WHERE id = ?`
        const connection = await mysql.Connect().getConnection();
        await connection.query(query,[id]);
        connection.release();
        return id
    }
}
