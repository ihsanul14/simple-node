const Domain = require("../domain");

const domain = new Domain()
class DataUsecase{
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

module.exports = DataUsecase