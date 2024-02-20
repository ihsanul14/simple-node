import { Data } from "./data"

export interface IDataDomain{
    GetData():Promise<Data[]>
    GetDataById(id:number):Promise<Data>
    CreateData(req:Partial<Data>):Promise<string>
    UpdateData(req:Data):Promise<number>
    DeleteData(id:number):Promise<number>   
}
class Domain{
    Data:IDataDomain
    constructor(dataDomain:IDataDomain){
        this.Data = dataDomain
    }
}
export default Domain