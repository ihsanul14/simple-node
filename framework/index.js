const Router = require('./router') 

class Framework{
    Start(){
        const router = new Router()
        router.Run();
    }
}

module.exports = Framework