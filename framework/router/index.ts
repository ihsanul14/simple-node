import { DataRoutes } from "./data";
import Logger from "../logger";

const express = require('express');
const router = express();
const env = require('../env')

class Router{
  Run(){
    router.use(express.json())
    DataRoutes(router)
    const port = env.port;
    router.listen(port, () => {
      const logger = new Logger()
      logger.Info(`Server is running on port ${port}`);
  });
  } 
}

export default Router