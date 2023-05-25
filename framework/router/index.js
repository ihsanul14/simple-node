const {DataRoutes} = require("./data")
const Logger = require("../logger")
const { swaggerSpec, swaggerUi } =  require("../swagger")

const express = require('express');
const router = express();
const env = require('../env')

class Router{
  Run(){
    router.use(express.json())
    router.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    DataRoutes(router)
    const port = env.port;
    router.listen(port, () => {
      const logger = new Logger()
      logger.Info(`Server is running on port ${port}`);
  });
  } 
}

module.exports = Router