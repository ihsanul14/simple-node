import winston from 'winston';
import env from '../env/index';

class Logger{
logger = winston.createLogger({
    level: env.logLevel,
    format: winston.format.json(),
    transports: [
      new winston.transports.Console(),
    ]
  });

Debug(message:string){
this.logger.log('debug', message)
}
Info(message:string){
    this.logger.log('info', message)
    }
Error(message:string, traceId?: string){
      this.logger.log('error', {message: message, traceId: traceId})
  }
}

export default Logger