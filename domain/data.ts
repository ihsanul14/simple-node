import { FieldPacket, OkPacket, ProcedureCallPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { IDataDomain } from '.';
import {MySQL} from '../framework/database/mysql'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

const mysql = new MySQL()

@Entity({name: 'testing'})
class DataORM {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    nama?: string
}

export type Data = {
    id: number,
    nama: string,
    nomor: number,
    created_at? : string,
    updated_at?: string
}

export class DataDomain implements IDataDomain{
    async GetData(): Promise<Data[]>{
        var query = "SELECT * FROM testing"
        const connection = await mysql.Connect().getConnection();
        const [data]: any = await connection.query(query);
        connection.release();
        if (!data || data?.length === 0){
            throw {code: 404, message: `no data found`}
        }
        return data as Data[]
    }

    async GetDataById(id:number): Promise<Data>{
        var query = "SELECT * FROM testing where id = ?"
        const connection = await mysql.Connect().getConnection();
        const [data]:any = await connection.query(query,[id]);
        connection.release();
        if (data.length === 0){
            throw {code: 404, message: `no data found with id ${id}`}
        }
        return data
    }
    
    async CreateData(req:Pick<Data, 'nama' | 'nomor'>):Promise<string>{
        var query = `INSERT INTO testing (nama, created_at) VALUES (?, now())`
        const connection = await mysql.Connect().getConnection();
        await connection.query(query,[req.nama]);
        connection.release();
        return req.nama
    }
    
    async UpdateData(req:Data):Promise<number>{
        var query = `UPDATE testing SET nama = ?, updated_at = now() WHERE id = ?`
        const connection = await mysql.Connect().getConnection();
        await connection.query(query,[req.nama, req.id]);
        connection.release();
        return req.id
    }
    
    async DeleteData(id:number):Promise<number>{
        var query = `DELETE FROM testing WHERE id = ?`
        const connection = await mysql.Connect().getConnection();
        await connection.query(query,[id]);
        connection.release();
        return id
    }
}
