import Domain from '../domain/index'
import {Data, DataDomain} from '../domain/data' 
import { IDataUsecase } from 'usecase'
const dataDomain = new DataDomain()
const domain = new Domain(dataDomain)

type CreateRequest = {
    id: number,
    nama: string,
    nomor: number,
}

type UpdateRequest = {
    id: number,
    nama: string,
    nomor: number,
}

export class DataUsecase implements IDataUsecase{
    GetDataUseCase(){
        return domain.Data.GetData()
    }

    GetDataByIdUseCase(id:number){
        return domain.Data.GetDataById(id)
    }
    
    CreateDataUseCase(req:CreateRequest){
        const data:Pick<Data,'nama' | 'nomor'> = {
            nama:req.nama,
            nomor:req.nomor
        }
        return domain.Data.CreateData(data)
    }
    
    UpdateDataUseCase(id:any,req:UpdateRequest){
        const data:Data = {
            id: id,
            nama:req.nama,
            nomor:req.nomor
        }
        return domain.Data.UpdateData(data)
    }
    
    DeleteDataUseCase(req:number){
        return domain.Data.DeleteData(req)
    }
}
