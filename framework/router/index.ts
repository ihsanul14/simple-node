import { DataRoutes } from "./data";
import Logger from "../logger/index";
import { SwaggerUi, swaggerSpec } from '../swagger/index'
import express,{ Request, Response, NextFunction } from 'express'
import env from "../env/index";
import APM from "../apm/index";


export const apmAgent = new APM()

export let router:any = express();
class Router{
  Init(){
    router.use(express.json())
    router.use('/swagger', SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));
    const apmTransaction = apmAgent.Start()
    router.use((req:Request, res:Response, next:NextFunction) => {
      const trace = apmTransaction.startTransaction(`${req.method} ${req.url}`, 'request');
      apmAgent.SetTransaction(trace)
      res.on('finish', () => {
        if (res.statusCode !== 200) {
          const error = new Error(`${res.statusCode} ${res.statusMessage}`);
          trace.result = res.statusCode
          trace.setOutcome('failure')
          apmTransaction.captureError(error)
        }else{
          trace.result = 200
          trace.setOutcome("success")
        }
        trace.end();
      });
      next();
    });
    
    DataRoutes(router)  
    return router
  }
  Run(){
    router = this.Init();
    const port = env.port;
    router.listen(port, () => {
      const logger = new Logger()
      logger.Info(`Server is running on port ${port}`);
  });
  } 
}

export default Router