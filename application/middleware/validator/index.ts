const yup = require('yup');


export class Validator{
    Validate = (schema:any) => {
        return (req:any, res:any, next:any)=> {
            schema
            .validate(req.body)
            .then(() => next())
            .catch((error:any) => {
            res.status(400).json({status: "failed", message: error.message});
            });    
        }  
    }

    CreateDataSchema = yup.object().shape({
        nama: yup.string().required(),
        nomor: yup.number().required()
    });

    UpdateDataSchema = yup.object().shape({
        id: yup.number().required().positive().integer().min(0),
        nama: yup.string().required(),
        nomor: yup.number().required()
    });
}


