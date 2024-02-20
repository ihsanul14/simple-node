export interface IDataController{
    GetData():any;
    GetDataById(id: number):any;
    CreateData(req:any):any;
    UpdateData(id:number,req:any):any;
    DeleteData(id:number):any
}

class Controller{
    static Data(Data: any, arg1: string) {
      throw new Error("Method not implemented.");
    }
    Data:IDataController
    constructor(dataController:IDataController){
        this.Data = dataController
    }
}

export default Controller