import Domain from "../domain";

const domain = new Domain()
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
    
    UpdateDataUseCase(id:number,req:any){
        return domain.Data.UpdateData(id, req)
    }
    
    DeleteDataUseCase(req:any){
        return domain.Data.DeleteData(req)
    }
}
