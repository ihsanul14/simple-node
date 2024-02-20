export interface IDataUsecase{
    GetDataUseCase():any
    GetDataByIdUseCase(id:number):any
    CreateDataUseCase(req:any):any
    UpdateDataUseCase(id:any,req:any):any
    DeleteDataUseCase(req:any):any
}

 class Usecase{
    Data:IDataUsecase
    constructor(dataUsecase:IDataUsecase){
        this.Data = dataUsecase
    }
}
export default Usecase