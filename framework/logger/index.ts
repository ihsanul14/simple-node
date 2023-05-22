const winston = require('winston');

export class logger{
    message: any;
    constructor(message:any) {
        this.message = message;
      }
logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    transports: [
      new winston.transports.Console(),
    ]
  });

Debug(message:any){
this.logger.log('debug', message)
}

Info(message:any){
    this.logger.log('info', message)
    }
Error(message:any){
      this.logger.log('info', message)
  }
}


function Logger(){
  return new logger('')
}

export default Logger