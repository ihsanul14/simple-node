import Usecase from "../../usecase"

const Controller = {
    GetData,
    CreateData,
    UpdateData,
    DeleteData
}

function GetData(req:any){
    return Usecase.GetDataUseCase(req)
}

function CreateData(req:any){
    return Usecase.CreateDataUseCase(req)
}

function UpdateData(req:any){
    return Usecase.UpdateDataUseCase(req)
}

function DeleteData(req:any){
    return Usecase.DeleteDataUseCase(req)
}

export default Controller