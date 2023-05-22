import Domain from "../domain";

const domain = new Domain()
export class DataUsecase{
    GetDataUseCase(req:any){
        return domain.Data.GetData(req)
    }
    
    CreateDataUseCase(req:any){
        return domain.Data.CreateData(req)
    }
    
    UpdateDataUseCase(req:any){
        return domain.Data.UpdateData(req)
    }
    
    DeleteDataUseCase(req:any){
        return domain.Data.DeleteData(req)
    }
}
