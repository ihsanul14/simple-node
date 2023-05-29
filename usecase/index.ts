 import { DataUsecase } from "./data.ts"
 class Usecase{
    Data:DataUsecase
    constructor(dataUsecase:DataUsecase){
        this.Data = dataUsecase
    }
}
export default Usecase