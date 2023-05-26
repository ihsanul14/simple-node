import { DataRoutes } from "./data.js";
import Logger from "../logger/index.js";
import { SwaggerUi, swaggerSpec } from '../swagger/index.js'
import express from 'express'
import env from "../env/index.js";

const router = express();
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