const Usecase = require("../../usecase")
const usecase = new Usecase()
  
class DataController{
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

module.exports = DataController