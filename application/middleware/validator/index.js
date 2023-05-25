const yup = require('yup');


class Validator{
    Validate = (schema) => {
        return (req, res, next)=> {
            schema
            .validate(req.body)
            .then(() => next())
            .catch((error) => {
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

module.exports = Validator
