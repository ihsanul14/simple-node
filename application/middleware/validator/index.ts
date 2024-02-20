import * as y from 'yup';

const yup:any = y
class Validator{
    Validate = (schema:any) => {
        return (req:any, res:any, next:any)=> {
            schema
            .validate(req.body)
            .then(() => next())
            .catch((error:Error) => {
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

export default Validator
