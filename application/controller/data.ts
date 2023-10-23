import Usecase from '../../usecase/index'
import { DataUsecase } from '../../usecase/data'

const dataUsecase = new (DataUsecase)
const usecase = new Usecase(dataUsecase)
  
export class DataController{
    GetData(){
        return usecase.Data.GetDataUseCase()
    }
    GetDataById(id:number){
        return usecase.Data.GetDataByIdUseCase(id)
    }
    CreateData(req:any){
        return usecase.Data.CreateDataUseCase(req)
    }
    UpdateData(id:number,req:any){
        return usecase.Data.UpdateDataUseCase(id, req)
    }
    DeleteData(id:number){
        return usecase.Data.DeleteDataUseCase(id)
    }
}