import Logger from "../logger/index";


const logger = new Logger()

function Error(res:any, error:any){
    const statusFailed = "failed"
    var status = 500
    if (error.code === "ER_DUP_ENTRY"){
        status = 400  
    }
    logger.Error(error.message)
    res.status(status).json({status: statusFailed, message: error.message})
}

export default Error
