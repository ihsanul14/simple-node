import Controller from "../../application/controller";
import Logger from "../logger";
import { Validator } from "../../application/middleware/validator";
import { Jwt } from "../../application/middleware/jwt";

const logger = new Logger()
const controller = new Controller()
const validator = new Validator()
const jwt = new Jwt()
const mysql = require('mysql2')

export function DataRoutes(router:any){
  router.get('/api/data', async (req:any, res:any) => {
    try {
      const data = await controller.Data.GetData()
      res.json({status: "success", data:data});
    } catch (err:any) {
      logger.Error(err)
      res.status(500).json({ status:"failed",message: err.message });
    }
  });

  router.get('/api/data/:id', async (req:any, res:any) => {
    try {
      const data = await controller.Data.GetDataById(req.params.id)
      res.json({status: "success", data:data});
    } catch (err:any) {
      if (err.code === 404){
        return res.status(404).json({status: "failed", message: err.message})
      }
      logger.Error(err)
      res.status(500).json({ status:"failed",message: err.message });
    }
  });

      
      router.post('/api/data', jwt.authenticateJWT, validator.Validate(validator.CreateDataSchema),async (req:any, res:any) => {
        try {
          const data = await controller.Data.CreateData(req.body)
          res.json({status:"success",message: "success create data", data: {"nama": data}});
        } catch (err:any) {
          if (err.code === "ER_DUP_ENTRY"){
            res.status(400).json({status: "failed", message: err.message})  
          }
          logger.Error(err)
          res.status(500).json({ status:"failed",message: err.message });
        }
      });
      
      router.put('/api/data/:id', async (req:any, res:any) => {
        try {
          const data = await controller.Data.UpdateData(req.params.id, req.body)
          res.json({status:"success",message: "success update data", data: {"id": data}});
        } catch (err:any) {
          logger.Error(err)
          res.status(500).json({ status:"failed",message: err.message });
        }
      });
      
      router.delete('/api/data/:id', async (req:any, res:any) => {
        try {
          const data = await controller.Data.DeleteData(req.params.id)
          res.json({status:"success",message: "success delete data", data: {"id": data}});
        } catch (err:any) {
          logger.Error(err)
          res.status(500).json({ status:"failed",message: err.message });
        }
      });

      router.post('/api/token', async (req:any, res:any) => {
        try {
          const data = await jwt.generateToken()
          res.json({status:"success",data: {"token": data}});
        } catch (err:any) {
          logger.Error(err)
          res.status(500).json({ status:"failed",message: err.message });
        }
      });
}