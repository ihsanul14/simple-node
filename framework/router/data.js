const Controller = require("../../application/controller")
const Logger = require("../logger");
const Validator  = require("../../application/middleware/validator");
const Jwt  = require("../../application/middleware/jwt") ;
const DataController  = require ("../../application/controller/data");

const logger = new Logger()
const dataController = new DataController
const controller = new Controller(dataController)
const validator = new Validator()
const jwt = new Jwt()

function DataRoutes(router){
  router.get('/api/data', async (req, res) => {
    try {
      const data = await controller.Data.GetData()
      res.json({status: "success", data:data});
    } catch (err) {
      logger.Error(err)
      res.status(500).json({ status:"failed",message: err.message });
    }
  });

  router.get('/api/data/:id', async (req, res) => {
    try {
      const data = await controller.Data.GetDataById(req.params.id)
      res.json({status: "success", data:data});
    } catch (err) {
      if (err.code === 404){
        return res.status(404).json({status: "failed", message: err.message})
      }
      logger.Error(err)
      res.status(500).json({ status:"failed",message: err.message });
    }
  });

      
      router.post('/api/data', jwt.authenticateJWT, validator.Validate(validator.CreateDataSchema),async (req, res) => {
        try {
          const data = await controller.Data.CreateData(req.body)
          res.json({status:"success",message: "success create data", data: {"nama": data}});
        } catch (err) {
          if (err.code === "ER_DUP_ENTRY"){
            res.status(400).json({status: "failed", message: err.message})  
          }
          logger.Error(err)
          res.status(500).json({ status:"failed",message: err.message });
        }
      });
      
      router.put('/api/data/:id', async (req, res) => {
        try {
          const data = await controller.Data.UpdateData(req.params.id, req.body)
          res.json({status:"success",message: "success update data", data: {"id": data}});
        } catch (err) {
          logger.Error(err)
          res.status(500).json({ status:"failed",message: err.message });
        }
      });
      
      router.delete('/api/data/:id', async (req, res) => {
        try {
          const data = await controller.Data.DeleteData(req.params.id)
          res.json({status:"success",message: "success delete data", data: {"id": data}});
        } catch (err) {
          logger.Error(err)
          res.status(500).json({ status:"failed",message: err.message });
        }
      });

      router.post('/api/token', async (req, res) => {
        try {
          const data = await jwt.generateToken()
          res.json({status:"success",data: {"token": data}});
        } catch (err) {
          logger.Error(err)
          res.status(500).json({ status:"failed",message: err.message });
        }
      });
}

module.exports = {DataRoutes}