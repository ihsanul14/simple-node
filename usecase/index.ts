 import { DataUsecase } from "./data"
 class Usecase{
    Data:DataUsecase
    constructor(dataUsecase:DataUsecase){
        this.Data = dataUsecase
    }
}
export default Usecase