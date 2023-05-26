import Usecase from '../../usecase/index.js'
import { DataUsecase } from '../../usecase/data.js'

const dataUsecase = new (DataUsecase)
const usecase = new Usecase(dataUsecase)
  
export class DataController{
    GetData(){
        return usecase.Data.GetDataUseCase()
    }
    GetDataById(id){
        return usecase.Data.GetDataByIdUseCase(id)
    }
    CreateData(req){
        return usecase.Data.CreateDataUseCase(req)
    }
    UpdateData(id,req){
        return usecase.Data.UpdateDataUseCase(id, req)
    }
    DeleteData(id){
        return usecase.Data.DeleteDataUseCase(id)
    }
}