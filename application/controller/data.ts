import Usecase from "../../usecase"
const usecase = new Usecase()
  
export class DataController{
    GetData(){
        return usecase.Data.GetDataUseCase()
    }

    GetDataById(id: number){
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
