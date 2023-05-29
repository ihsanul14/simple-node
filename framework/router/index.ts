import { DataRoutes } from "./data.ts";
import Logger from "../logger/index.ts";
import { SwaggerUi, swaggerSpec } from '../swagger/index.ts'
import express from 'express'
import env from "../env/index.ts";

const router:any = express();
class Router{
  Run(){
    router.use(express.json())
    router.use('/swagger', SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));
    DataRoutes(router)
    const port = env.port;
    router.listen(port, () => {
      const logger = new Logger()
      logger.Info(`Server is running on port ${port}`);
  });
  } 
}

export default Router