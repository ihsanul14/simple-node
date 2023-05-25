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

module.exports = Logger