import Usecase from "../../usecase"

const usecase = new Usecase()
export class DataController{
    GetData(req:any){
        return usecase.Data.GetDataUseCase(req)
    }
    
    CreateData(req:any){
        return usecase.Data.CreateDataUseCase(req)
    }
    
    UpdateData(req:any){
        return usecase.Data.UpdateDataUseCase(req)
    }
    
    DeleteData(req:any){
        return usecase.Data.DeleteDataUseCase(req)
    }
}
