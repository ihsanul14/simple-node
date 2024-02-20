import env from '../../../framework/env/index';
import jwt from 'jsonwebtoken'
const secretKey = env.jwt.secret

class Jwt{
    generateToken = () =>{
        const payload = { userId: 123456 };
        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
        return token
    }

    authenticateJWT = (req:any, res:any, next:any) => {
        const token = req.headers.authorization?.split(' ')[1];
        if (token) {
          jwt.verify(token, secretKey, (err:any, user:any) => {
            if (err) {
              res.status(403).json({status: "failed", message: err.message});
            } else {
              req.user = user;
              next(); 
            }
          });
        } else {
          res.status(401).json({status: "failed", message: "unauthorized"});
        }
      };
}

export default Jwt