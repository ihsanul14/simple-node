import Domain from "../domain";

const Usecase = {
    GetDataUseCase,
    CreateDataUseCase,
    DeleteDataUseCase,
    UpdateDataUseCase
}

function GetDataUseCase(req:any){
    return Domain.GetData(req)
}

function CreateDataUseCase(req:any){
    return Domain.CreateData(req)
}

function UpdateDataUseCase(req:any){
    return Domain.UpdateData(req)
}

function DeleteDataUseCase(req:any){
    return Domain.DeleteData(req)
}

export default Usecase