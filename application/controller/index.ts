import { DataController } from "./data"
class Controller{
    Data:DataController
    constructor(dataController:DataController){
        this.Data = dataController
    }
}

export default Controller