import database from "../framework/database"

const Domain = {
    GetData,
    CreateData,
    UpdateData,
    DeleteData
}

async function GetData(req:any){
    var query = "SELECT * FROM testing"
    if (req.id > 0){
        query = `SELECT * from testing WHERE id = ${req.id}`
    }
    const connection = await database.mysql_pool().getConnection();
    const [data] = await connection.query(query);
    connection.release();
    return data
}

async function CreateData(req:any){
    var query = `INSERT INTO testing (nama, created_at) VALUES (?, now())`
    const connection = await database.mysql_pool().getConnection();
    await connection.query(query,[req.nama]);
    connection.release();
    return req.nama
}

async function UpdateData(req:any){
    var query = `UPDATE testing SET nama = ?, updated_at = now() WHERE id = ?`
    const connection = await database.mysql_pool().getConnection();
    await connection.query(query,[req.nama, req.id]);
    connection.release();
    return req.id
}

async function DeleteData(req:any){
    var query = `DELETE FROM testing WHERE id = ${req.id}`
    const connection = await database.mysql_pool().getConnection();
    await connection.query(query);
    connection.release();
    return req.id
}

export default Domain