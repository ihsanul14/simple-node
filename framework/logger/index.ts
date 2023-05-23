const winston = require('winston');
const env = require('../env')

class Logger{
logger = winston.createLogger({
    level: env.logLevel,
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
      this.logger.log('error', message)
  }
}

export default Logger