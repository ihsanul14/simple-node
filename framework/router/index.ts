import { DataRoutes } from "./data";
import Logger from "../logger";

const express = require('express');
const router = express();

class Router{
  Run(){
    router.use(express.json())
    DataRoutes(router)
    const port = 30001;
    router.listen(port, () => {
      const logger = new Logger()
      logger.Debug(`Server is running on port ${port}`);
  });
  } 
}

export default Router