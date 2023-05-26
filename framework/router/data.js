import Controller from "../../application/controller/index.js" 
import Validator from "../../application/middleware/validator/index.js";
import Jwt from '../../application/middleware/jwt/index.js'
import { DataController } from "../../application/controller/data.js";
import Error from "../error/index.js";

const dataController = new DataController
const controller = new Controller(dataController)
const validator = new Validator()
const jwt = new Jwt()
const success = "success"

export function DataRoutes(router){
  router.get('/api/data', async (req, res) => {
    try {
      const data = await controller.Data.GetData()
      res.json({status: "success", data:data});
    } catch (err) {
        Error(res, err)
    }
  });

  router.get('/api/data/:id', async (req, res) => {
    try {
      const data = await controller.Data.GetDataById(req.params.id)
      res.json({status: success, data:data});
    } catch (err) {
        Error(res, err)
    }
  });

      
      router.post('/api/data', jwt.authenticateJWT, validator.Validate(validator.CreateDataSchema),async (req, res) => {
        try {
          const data = await controller.Data.CreateData(req.body)
          res.json({status:success,message: "success create data", data: {"nama": data}});
        } catch (err) {
            Error(res, err)
        }
      });
      
      router.put('/api/data/:id', async (req, res) => {
        try {
          const data = await controller.Data.UpdateData(req.params.id, req.body)
          res.json({status:success,message: "success update data", data: {"id": data}});
        } catch (err) {
            Error(res, err)
        }
      });
      
      router.delete('/api/data/:id', async (req, res) => {
        try {
          const data = await controller.Data.DeleteData(req.params.id)
          res.json({status:success,message: "success delete data", data: {"id": data}});
        } catch (err) {
            Error(res, err)
        }
      });

      router.post('/api/token', async (req, res) => {
        try {
          const data = await jwt.generateToken()
          res.json({status:success,data: {"token": data}});
        } catch (err) {
            Error(res, err)
        }
      });
}
