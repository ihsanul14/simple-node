import { DataRoutes } from "./data";
import Logger from "../logger/index";
import { SwaggerUi, swaggerSpec } from '../swagger/index'
import express,{ Request, Response, NextFunction } from 'express'
import env from "../env/index";
import APM from "../apm/index";
import apm from "elastic-apm-node";

export const apmAgent = new APM()
export let router:any = express(); 
class Router{
  Init(){
    router.use(express.json())
    router.use('/swagger', SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));
    const apmTransaction = apmAgent.Start()
    router.use(this.ApmMiddleware(apmTransaction));
    DataRoutes(router)  
    return router
  }
  ApmMiddleware(apmTransaction:apm.Agent){
    return function(req:Request, res:Response, next:NextFunction){
      const trace = apmTransaction.startTransaction(`${req.method} ${req.url}`, 'request');
      apmAgent.SetTransaction(trace)
      res.setHeader('APM-Trace-Id', trace.ids["trace.id"]) 
      var data:string | Error 
      const tempJson = res.json;
      res.json = (body:any) => {
        res.locals.body = body;
        data = JSON.stringify(body)
        return tempJson.call(res, body);
      };
      res.on('finish', () => {
        if (res.statusCode >= 400) {
          const error = new Error(`${res.statusCode} ${data}`);
          trace.result = res.statusCode
          trace.setOutcome('failure')
          apmTransaction.captureError(error)
        }else{
          trace.result = res.statusCode
          trace.setOutcome("success")
        }
        trace.end();
      });
      next();
    }
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