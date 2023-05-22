const winston = require('winston');

class Logger{
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

export default Logger