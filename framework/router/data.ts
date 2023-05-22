import Controller from "../../application/controller";
import Logger from "../logger";

const logger = Logger()

export function DataRoutes(router:any){
    router.post('/api/data', async (req:any, res:any) => {
        try {
          const data = await Controller.GetData(req.body)
          res.json({status: "success", data:data});
        } catch (err) {
          logger.Error(err)
          res.status(500).json({ status:"failed",error: err });
        }
      });
      
      router.post('/api/data/add', async (req:any, res:any) => {
        try {
          const data = await Controller.CreateData(req.body)
          res.json({status:"success",message: "success create data", data: {"nama": data}});
        } catch (err) {
          logger.Error(err)
          res.status(500).json({ status:"failed",error: err });
        }
      });
      
      router.put('/api/data/update', async (req:any, res:any) => {
        try {
          const data = await Controller.UpdateData(req.body)
          res.json({status:"success",message: "success update data", data: {"id": data}});
        } catch (err) {
          logger.Error(err)
          res.status(500).json({ status:"failed",error: err });
        }
      });
      
      router.delete('/api/data', async (req:any, res:any) => {
        try {
          const data = await Controller.DeleteData(req.body)
          res.json({status:"success",message: "success delete data", data: {"id": data}});
        } catch (err) {
          logger.Error(err)
          res.status(500).json({ status:"failed",error: err });
        }
      });
}