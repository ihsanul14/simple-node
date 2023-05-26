import winston from 'winston';
import env from '../env/index.js';

class Logger{
logger = winston.createLogger({
    level: env.logLevel,
    format: winston.format.json(),
    transports: [
      new winston.transports.Console(),
    ]
  });

Debug(message){
this.logger.log('debug', message)
}
Info(message){
    this.logger.log('info', message)
    }
Error(message){
      this.logger.log('error', message)
  }
}

export default Logger