import { DataRoutes } from "./data";
import Logger from "../logger/index";
import { SwaggerUi, swaggerSpec } from '../swagger/index'
import express from 'express'
import env from "../env/index";

export let router:any = express();
class Router{
  Init(){
    router.use(express.json())
    router.use('/swagger', SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));
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