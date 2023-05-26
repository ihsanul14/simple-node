import Domain from '../domain/index.js'
import {DataDomain} from '../domain/data.js' 
const dataDomain = new DataDomain()
const domain = new Domain(dataDomain)
export class DataUsecase{
    GetDataUseCase(){
        return domain.Data.GetData()
    }

    GetDataByIdUseCase(id){
        return domain.Data.GetDataById(id)
    }
    
    CreateDataUseCase(req){
        return domain.Data.CreateData(req)
    }
    
    UpdateDataUseCase(id,req){
        return domain.Data.UpdateData(id, req)
    }
    
    DeleteDataUseCase(req){
        return domain.Data.DeleteData(req)
    }
}
