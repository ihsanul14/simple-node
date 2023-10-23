import Domain from '../domain/index'
import {DataDomain} from '../domain/data' 
const dataDomain = new DataDomain()
const domain = new Domain(dataDomain)
export class DataUsecase{
    GetDataUseCase(){
        return domain.Data.GetData()
    }

    GetDataByIdUseCase(id:number){
        return domain.Data.GetDataById(id)
    }
    
    CreateDataUseCase(req:any){
        return domain.Data.CreateData(req)
    }
    
    UpdateDataUseCase(id:any,req:any){
        return domain.Data.UpdateData(id, req)
    }
    
    DeleteDataUseCase(req:any){
        return domain.Data.DeleteData(req)
    }
}
